# `dmsDataProvider` Submodule <a name="`dmsDataProvider` Submodule" id="@cdktn/provider-awscc.dmsDataProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataProvider <a name="DmsDataProvider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider awscc_dms_data_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProvider(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine: str,
  data_provider_identifier: str = None,
  data_provider_name: str = None,
  description: str = None,
  exact_settings: bool | IResolvable = None,
  settings: DmsDataProviderSettings = None,
  tags: IResolvable | typing.List[DmsDataProviderTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.engine">engine</a></code> | <code>str</code> | The property describes a data engine for the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.dataProviderIdentifier">data_provider_identifier</a></code> | <code>str</code> | The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.dataProviderName">data_provider_name</a></code> | <code>str</code> | The property describes a name to identify the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | The optional description of the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.exactSettings">exact_settings</a></code> | <code>bool \| cdktn.IResolvable</code> | The property describes the exact settings which can be modified. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a></code> | The property identifies the exact type of settings for the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.engine"></a>

- *Type:* str

The property describes a data engine for the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}

---

##### `data_provider_identifier`<sup>Optional</sup> <a name="data_provider_identifier" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.dataProviderIdentifier"></a>

- *Type:* str

The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#data_provider_identifier DmsDataProvider#data_provider_identifier}

---

##### `data_provider_name`<sup>Optional</sup> <a name="data_provider_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.dataProviderName"></a>

- *Type:* str

The property describes a name to identify the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#data_provider_name DmsDataProvider#data_provider_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.description"></a>

- *Type:* str

The optional description of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#description DmsDataProvider#description}

---

##### `exact_settings`<sup>Optional</sup> <a name="exact_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.exactSettings"></a>

- *Type:* bool | cdktn.IResolvable

The property describes the exact settings which can be modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#exact_settings DmsDataProvider#exact_settings}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

The property identifies the exact type of settings for the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDataProviderIdentifier">reset_data_provider_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDataProviderName">reset_data_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetExactSettings">reset_exact_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetSettings">reset_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_settings` <a name="put_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings"></a>

```python
def put_settings(
  doc_db_settings: DmsDataProviderSettingsDocDbSettings = None,
  ibm_db2_luw_settings: DmsDataProviderSettingsIbmDb2LuwSettings = None,
  ibm_db2_z_os_settings: DmsDataProviderSettingsIbmDb2ZOsSettings = None,
  maria_db_settings: DmsDataProviderSettingsMariaDbSettings = None,
  microsoft_sql_server_settings: DmsDataProviderSettingsMicrosoftSqlServerSettings = None,
  mongo_db_settings: DmsDataProviderSettingsMongoDbSettings = None,
  my_sql_settings: DmsDataProviderSettingsMySqlSettings = None,
  oracle_settings: DmsDataProviderSettingsOracleSettings = None,
  postgre_sql_settings: DmsDataProviderSettingsPostgreSqlSettings = None,
  redshift_settings: DmsDataProviderSettingsRedshiftSettings = None,
  sybase_ase_settings: DmsDataProviderSettingsSybaseAseSettings = None
) -> None
```

###### `doc_db_settings`<sup>Optional</sup> <a name="doc_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.docDbSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

DocDbSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#doc_db_settings DmsDataProvider#doc_db_settings}

---

###### `ibm_db2_luw_settings`<sup>Optional</sup> <a name="ibm_db2_luw_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.ibmDb2LuwSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

IbmDb2LuwSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ibm_db_2_luw_settings DmsDataProvider#ibm_db_2_luw_settings}

---

###### `ibm_db2_z_os_settings`<sup>Optional</sup> <a name="ibm_db2_z_os_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.ibmDb2ZOsSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a>

IbmDb2zOsSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ibm_db_2_z_os_settings DmsDataProvider#ibm_db_2_z_os_settings}

---

###### `maria_db_settings`<sup>Optional</sup> <a name="maria_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.mariaDbSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

MariaDbSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#maria_db_settings DmsDataProvider#maria_db_settings}

---

###### `microsoft_sql_server_settings`<sup>Optional</sup> <a name="microsoft_sql_server_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.microsoftSqlServerSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

MicrosoftSqlServerSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#microsoft_sql_server_settings DmsDataProvider#microsoft_sql_server_settings}

---

###### `mongo_db_settings`<sup>Optional</sup> <a name="mongo_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.mongoDbSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

MongoDbSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#mongo_db_settings DmsDataProvider#mongo_db_settings}

---

###### `my_sql_settings`<sup>Optional</sup> <a name="my_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.mySqlSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a>

MySqlSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#my_sql_settings DmsDataProvider#my_sql_settings}

---

###### `oracle_settings`<sup>Optional</sup> <a name="oracle_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.oracleSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

OracleSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#oracle_settings DmsDataProvider#oracle_settings}

---

###### `postgre_sql_settings`<sup>Optional</sup> <a name="postgre_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.postgreSqlSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a>

PostgreSqlSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#postgre_sql_settings DmsDataProvider#postgre_sql_settings}

---

###### `redshift_settings`<sup>Optional</sup> <a name="redshift_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.redshiftSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

RedshiftSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#redshift_settings DmsDataProvider#redshift_settings}

---

###### `sybase_ase_settings`<sup>Optional</sup> <a name="sybase_ase_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.sybaseAseSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

SybaseAseSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#sybase_ase_settings DmsDataProvider#sybase_ase_settings}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DmsDataProviderTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>]

---

##### `reset_data_provider_identifier` <a name="reset_data_provider_identifier" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDataProviderIdentifier"></a>

```python
def reset_data_provider_identifier() -> None
```

##### `reset_data_provider_name` <a name="reset_data_provider_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDataProviderName"></a>

```python
def reset_data_provider_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exact_settings` <a name="reset_exact_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetExactSettings"></a>

```python
def reset_exact_settings() -> None
```

##### `reset_settings` <a name="reset_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetSettings"></a>

```python
def reset_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isConstruct"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformElement"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformResource"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsDataProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsDataProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderArn">data_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderCreationTime">data_provider_creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference">DmsDataProviderSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList">DmsDataProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderIdentifierInput">data_provider_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderNameInput">data_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.exactSettingsInput">exact_settings_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.settingsInput">settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderIdentifier">data_provider_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.exactSettings">exact_settings</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_provider_arn`<sup>Required</sup> <a name="data_provider_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderArn"></a>

```python
data_provider_arn: str
```

- *Type:* str

---

##### `data_provider_creation_time`<sup>Required</sup> <a name="data_provider_creation_time" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderCreationTime"></a>

```python
data_provider_creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.settings"></a>

```python
settings: DmsDataProviderSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference">DmsDataProviderSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tags"></a>

```python
tags: DmsDataProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList">DmsDataProviderTagsList</a>

---

##### `data_provider_identifier_input`<sup>Optional</sup> <a name="data_provider_identifier_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderIdentifierInput"></a>

```python
data_provider_identifier_input: str
```

- *Type:* str

---

##### `data_provider_name_input`<sup>Optional</sup> <a name="data_provider_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderNameInput"></a>

```python
data_provider_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `exact_settings_input`<sup>Optional</sup> <a name="exact_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.exactSettingsInput"></a>

```python
exact_settings_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.settingsInput"></a>

```python
settings_input: IResolvable | DmsDataProviderSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DmsDataProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>]

---

##### `data_provider_identifier`<sup>Required</sup> <a name="data_provider_identifier" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderIdentifier"></a>

```python
data_provider_identifier: str
```

- *Type:* str

---

##### `data_provider_name`<sup>Required</sup> <a name="data_provider_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `exact_settings`<sup>Required</sup> <a name="exact_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.exactSettings"></a>

```python
exact_settings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataProviderConfig <a name="DmsDataProviderConfig" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine: str,
  data_provider_identifier: str = None,
  data_provider_name: str = None,
  description: str = None,
  exact_settings: bool | IResolvable = None,
  settings: DmsDataProviderSettings = None,
  tags: IResolvable | typing.List[DmsDataProviderTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.engine">engine</a></code> | <code>str</code> | The property describes a data engine for the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dataProviderIdentifier">data_provider_identifier</a></code> | <code>str</code> | The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dataProviderName">data_provider_name</a></code> | <code>str</code> | The property describes a name to identify the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.description">description</a></code> | <code>str</code> | The optional description of the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.exactSettings">exact_settings</a></code> | <code>bool \| cdktn.IResolvable</code> | The property describes the exact settings which can be modified. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a></code> | The property identifies the exact type of settings for the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

The property describes a data engine for the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}

---

##### `data_provider_identifier`<sup>Optional</sup> <a name="data_provider_identifier" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dataProviderIdentifier"></a>

```python
data_provider_identifier: str
```

- *Type:* str

The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#data_provider_identifier DmsDataProvider#data_provider_identifier}

---

##### `data_provider_name`<sup>Optional</sup> <a name="data_provider_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dataProviderName"></a>

```python
data_provider_name: str
```

- *Type:* str

The property describes a name to identify the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#data_provider_name DmsDataProvider#data_provider_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The optional description of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#description DmsDataProvider#description}

---

##### `exact_settings`<sup>Optional</sup> <a name="exact_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.exactSettings"></a>

```python
exact_settings: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The property describes the exact settings which can be modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#exact_settings DmsDataProvider#exact_settings}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.settings"></a>

```python
settings: DmsDataProviderSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

The property identifies the exact type of settings for the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DmsDataProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}

---

### DmsDataProviderSettings <a name="DmsDataProviderSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettings(
  doc_db_settings: DmsDataProviderSettingsDocDbSettings = None,
  ibm_db2_luw_settings: DmsDataProviderSettingsIbmDb2LuwSettings = None,
  ibm_db2_z_os_settings: DmsDataProviderSettingsIbmDb2ZOsSettings = None,
  maria_db_settings: DmsDataProviderSettingsMariaDbSettings = None,
  microsoft_sql_server_settings: DmsDataProviderSettingsMicrosoftSqlServerSettings = None,
  mongo_db_settings: DmsDataProviderSettingsMongoDbSettings = None,
  my_sql_settings: DmsDataProviderSettingsMySqlSettings = None,
  oracle_settings: DmsDataProviderSettingsOracleSettings = None,
  postgre_sql_settings: DmsDataProviderSettingsPostgreSqlSettings = None,
  redshift_settings: DmsDataProviderSettingsRedshiftSettings = None,
  sybase_ase_settings: DmsDataProviderSettingsSybaseAseSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings">doc_db_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a></code> | DocDbSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings">ibm_db2_luw_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a></code> | IbmDb2LuwSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZOsSettings">ibm_db2_z_os_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a></code> | IbmDb2zOsSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings">maria_db_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a></code> | MariaDbSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings">microsoft_sql_server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a></code> | MicrosoftSqlServerSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings">mongo_db_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a></code> | MongoDbSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mySqlSettings">my_sql_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a></code> | MySqlSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings">oracle_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a></code> | OracleSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.postgreSqlSettings">postgre_sql_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a></code> | PostgreSqlSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings">redshift_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a></code> | RedshiftSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings">sybase_ase_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a></code> | SybaseAseSettings property identifier. |

---

##### `doc_db_settings`<sup>Optional</sup> <a name="doc_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings"></a>

```python
doc_db_settings: DmsDataProviderSettingsDocDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

DocDbSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#doc_db_settings DmsDataProvider#doc_db_settings}

---

##### `ibm_db2_luw_settings`<sup>Optional</sup> <a name="ibm_db2_luw_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings"></a>

```python
ibm_db2_luw_settings: DmsDataProviderSettingsIbmDb2LuwSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

IbmDb2LuwSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ibm_db_2_luw_settings DmsDataProvider#ibm_db_2_luw_settings}

---

##### `ibm_db2_z_os_settings`<sup>Optional</sup> <a name="ibm_db2_z_os_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZOsSettings"></a>

```python
ibm_db2_z_os_settings: DmsDataProviderSettingsIbmDb2ZOsSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a>

IbmDb2zOsSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ibm_db_2_z_os_settings DmsDataProvider#ibm_db_2_z_os_settings}

---

##### `maria_db_settings`<sup>Optional</sup> <a name="maria_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings"></a>

```python
maria_db_settings: DmsDataProviderSettingsMariaDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

MariaDbSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#maria_db_settings DmsDataProvider#maria_db_settings}

---

##### `microsoft_sql_server_settings`<sup>Optional</sup> <a name="microsoft_sql_server_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings"></a>

```python
microsoft_sql_server_settings: DmsDataProviderSettingsMicrosoftSqlServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

MicrosoftSqlServerSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#microsoft_sql_server_settings DmsDataProvider#microsoft_sql_server_settings}

---

##### `mongo_db_settings`<sup>Optional</sup> <a name="mongo_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings"></a>

```python
mongo_db_settings: DmsDataProviderSettingsMongoDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

MongoDbSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#mongo_db_settings DmsDataProvider#mongo_db_settings}

---

##### `my_sql_settings`<sup>Optional</sup> <a name="my_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mySqlSettings"></a>

```python
my_sql_settings: DmsDataProviderSettingsMySqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a>

MySqlSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#my_sql_settings DmsDataProvider#my_sql_settings}

---

##### `oracle_settings`<sup>Optional</sup> <a name="oracle_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings"></a>

```python
oracle_settings: DmsDataProviderSettingsOracleSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

OracleSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#oracle_settings DmsDataProvider#oracle_settings}

---

##### `postgre_sql_settings`<sup>Optional</sup> <a name="postgre_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.postgreSqlSettings"></a>

```python
postgre_sql_settings: DmsDataProviderSettingsPostgreSqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a>

PostgreSqlSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#postgre_sql_settings DmsDataProvider#postgre_sql_settings}

---

##### `redshift_settings`<sup>Optional</sup> <a name="redshift_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings"></a>

```python
redshift_settings: DmsDataProviderSettingsRedshiftSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

RedshiftSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#redshift_settings DmsDataProvider#redshift_settings}

---

##### `sybase_ase_settings`<sup>Optional</sup> <a name="sybase_ase_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings"></a>

```python
sybase_ase_settings: DmsDataProviderSettingsSybaseAseSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

SybaseAseSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#sybase_ase_settings DmsDataProvider#sybase_ase_settings}

---

### DmsDataProviderSettingsDocDbSettings <a name="DmsDataProviderSettingsDocDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsDocDbSettings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2LuwSettings <a name="DmsDataProviderSettingsIbmDb2LuwSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2ZOsSettings <a name="DmsDataProviderSettingsIbmDb2ZOsSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMariaDbSettings <a name="DmsDataProviderSettingsMariaDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMariaDbSettings(
  certificate_arn: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMicrosoftSqlServerSettings <a name="DmsDataProviderSettingsMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMongoDbSettings <a name="DmsDataProviderSettingsMongoDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMongoDbSettings(
  auth_mechanism: str = None,
  auth_source: str = None,
  auth_type: str = None,
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism">auth_mechanism</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource">auth_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `auth_mechanism`<sup>Optional</sup> <a name="auth_mechanism" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism"></a>

```python
auth_mechanism: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}.

---

##### `auth_source`<sup>Optional</sup> <a name="auth_source" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource"></a>

```python
auth_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}.

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMySqlSettings <a name="DmsDataProviderSettingsMySqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMySqlSettings(
  certificate_arn: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsOracleSettings <a name="DmsDataProviderSettingsOracleSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsOracleSettings(
  asm_server: str = None,
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  secrets_manager_oracle_asm_access_role_arn: str = None,
  secrets_manager_oracle_asm_secret_id: str = None,
  secrets_manager_security_db_encryption_access_role_arn: str = None,
  secrets_manager_security_db_encryption_secret_id: str = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer">asm_server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">secrets_manager_oracle_asm_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId">secrets_manager_oracle_asm_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn">secrets_manager_security_db_encryption_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId">secrets_manager_security_db_encryption_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `asm_server`<sup>Optional</sup> <a name="asm_server" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer"></a>

```python
asm_server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `secrets_manager_oracle_asm_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_access_role_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```python
secrets_manager_oracle_asm_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}.

---

##### `secrets_manager_oracle_asm_secret_id`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_secret_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```python
secrets_manager_oracle_asm_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}.

---

##### `secrets_manager_security_db_encryption_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_access_role_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```python
secrets_manager_security_db_encryption_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}.

---

##### `secrets_manager_security_db_encryption_secret_id`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_secret_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```python
secrets_manager_security_db_encryption_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsPostgreSqlSettings <a name="DmsDataProviderSettingsPostgreSqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsRedshiftSettings <a name="DmsDataProviderSettingsRedshiftSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsRedshiftSettings(
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

### DmsDataProviderSettingsSybaseAseSettings <a name="DmsDataProviderSettingsSybaseAseSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings(
  certificate_arn: str = None,
  database_name: str = None,
  encrypt_password: bool | IResolvable = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword">encrypt_password</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode">ssl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `encrypt_password`<sup>Optional</sup> <a name="encrypt_password" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword"></a>

```python
encrypt_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderTags <a name="DmsDataProviderTags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#key DmsDataProvider#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#value DmsDataProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataProviderSettingsDocDbSettingsOutputReference <a name="DmsDataProviderSettingsDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsDocDbSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

---


### DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsIbmDb2LuwSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

---


### DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsIbmDb2ZOsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a>

---


### DmsDataProviderSettingsMariaDbSettingsOutputReference <a name="DmsDataProviderSettingsMariaDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsMariaDbSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsMicrosoftSqlServerSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

---


### DmsDataProviderSettingsMongoDbSettingsOutputReference <a name="DmsDataProviderSettingsMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism">reset_auth_mechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource">reset_auth_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_mechanism` <a name="reset_auth_mechanism" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```python
def reset_auth_mechanism() -> None
```

##### `reset_auth_source` <a name="reset_auth_source" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource"></a>

```python
def reset_auth_source() -> None
```

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput">auth_mechanism_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput">auth_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism">auth_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource">auth_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_mechanism_input`<sup>Optional</sup> <a name="auth_mechanism_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```python
auth_mechanism_input: str
```

- *Type:* str

---

##### `auth_source_input`<sup>Optional</sup> <a name="auth_source_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput"></a>

```python
auth_source_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `auth_mechanism`<sup>Required</sup> <a name="auth_mechanism" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism"></a>

```python
auth_mechanism: str
```

- *Type:* str

---

##### `auth_source`<sup>Required</sup> <a name="auth_source" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource"></a>

```python
auth_source: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsMongoDbSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

---


### DmsDataProviderSettingsMySqlSettingsOutputReference <a name="DmsDataProviderSettingsMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsMySqlSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a>

---


### DmsDataProviderSettingsOracleSettingsOutputReference <a name="DmsDataProviderSettingsOracleSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer">reset_asm_server</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">reset_secrets_manager_oracle_asm_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">reset_secrets_manager_oracle_asm_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn">reset_secrets_manager_security_db_encryption_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId">reset_secrets_manager_security_db_encryption_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_asm_server` <a name="reset_asm_server" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer"></a>

```python
def reset_asm_server() -> None
```

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_secrets_manager_oracle_asm_access_role_arn` <a name="reset_secrets_manager_oracle_asm_access_role_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```python
def reset_secrets_manager_oracle_asm_access_role_arn() -> None
```

##### `reset_secrets_manager_oracle_asm_secret_id` <a name="reset_secrets_manager_oracle_asm_secret_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```python
def reset_secrets_manager_oracle_asm_secret_id() -> None
```

##### `reset_secrets_manager_security_db_encryption_access_role_arn` <a name="reset_secrets_manager_security_db_encryption_access_role_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```python
def reset_secrets_manager_security_db_encryption_access_role_arn() -> None
```

##### `reset_secrets_manager_security_db_encryption_secret_id` <a name="reset_secrets_manager_security_db_encryption_secret_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId"></a>

```python
def reset_secrets_manager_security_db_encryption_secret_id() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput">asm_server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">secrets_manager_oracle_asm_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">secrets_manager_oracle_asm_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput">secrets_manager_security_db_encryption_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput">secrets_manager_security_db_encryption_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer">asm_server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secrets_manager_oracle_asm_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secrets_manager_oracle_asm_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn">secrets_manager_security_db_encryption_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId">secrets_manager_security_db_encryption_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asm_server_input`<sup>Optional</sup> <a name="asm_server_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput"></a>

```python
asm_server_input: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secrets_manager_oracle_asm_access_role_arn_input`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_access_role_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```python
secrets_manager_oracle_asm_access_role_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_oracle_asm_secret_id_input`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_secret_id_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```python
secrets_manager_oracle_asm_secret_id_input: str
```

- *Type:* str

---

##### `secrets_manager_security_db_encryption_access_role_arn_input`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_access_role_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput"></a>

```python
secrets_manager_security_db_encryption_access_role_arn_input: str
```

- *Type:* str

---

##### `secrets_manager_security_db_encryption_secret_id_input`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_secret_id_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput"></a>

```python
secrets_manager_security_db_encryption_secret_id_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `asm_server`<sup>Required</sup> <a name="asm_server" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer"></a>

```python
asm_server: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secrets_manager_oracle_asm_access_role_arn`<sup>Required</sup> <a name="secrets_manager_oracle_asm_access_role_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```python
secrets_manager_oracle_asm_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_oracle_asm_secret_id`<sup>Required</sup> <a name="secrets_manager_oracle_asm_secret_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```python
secrets_manager_oracle_asm_secret_id: str
```

- *Type:* str

---

##### `secrets_manager_security_db_encryption_access_role_arn`<sup>Required</sup> <a name="secrets_manager_security_db_encryption_access_role_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```python
secrets_manager_security_db_encryption_access_role_arn: str
```

- *Type:* str

---

##### `secrets_manager_security_db_encryption_secret_id`<sup>Required</sup> <a name="secrets_manager_security_db_encryption_secret_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```python
secrets_manager_security_db_encryption_secret_id: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsOracleSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

---


### DmsDataProviderSettingsOutputReference <a name="DmsDataProviderSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings">put_doc_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings">put_ibm_db2_luw_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings">put_ibm_db2_z_os_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings">put_maria_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings">put_microsoft_sql_server_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings">put_mongo_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMySqlSettings">put_my_sql_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings">put_oracle_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings">put_postgre_sql_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings">put_redshift_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings">put_sybase_ase_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings">reset_doc_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings">reset_ibm_db2_luw_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZOsSettings">reset_ibm_db2_z_os_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings">reset_maria_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings">reset_microsoft_sql_server_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings">reset_mongo_db_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMySqlSettings">reset_my_sql_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings">reset_oracle_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgreSqlSettings">reset_postgre_sql_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings">reset_redshift_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings">reset_sybase_ase_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_doc_db_settings` <a name="put_doc_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings"></a>

```python
def put_doc_db_settings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `put_ibm_db2_luw_settings` <a name="put_ibm_db2_luw_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings"></a>

```python
def put_ibm_db2_luw_settings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `put_ibm_db2_z_os_settings` <a name="put_ibm_db2_z_os_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings"></a>

```python
def put_ibm_db2_z_os_settings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `put_maria_db_settings` <a name="put_maria_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings"></a>

```python
def put_maria_db_settings(
  certificate_arn: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `put_microsoft_sql_server_settings` <a name="put_microsoft_sql_server_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings"></a>

```python
def put_microsoft_sql_server_settings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `put_mongo_db_settings` <a name="put_mongo_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings"></a>

```python
def put_mongo_db_settings(
  auth_mechanism: str = None,
  auth_source: str = None,
  auth_type: str = None,
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `auth_mechanism`<sup>Optional</sup> <a name="auth_mechanism" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.authMechanism"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}.

---

###### `auth_source`<sup>Optional</sup> <a name="auth_source" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.authSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}.

---

###### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}.

---

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `put_my_sql_settings` <a name="put_my_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMySqlSettings"></a>

```python
def put_my_sql_settings(
  certificate_arn: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMySqlSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMySqlSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMySqlSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMySqlSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `put_oracle_settings` <a name="put_oracle_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings"></a>

```python
def put_oracle_settings(
  asm_server: str = None,
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  secrets_manager_oracle_asm_access_role_arn: str = None,
  secrets_manager_oracle_asm_secret_id: str = None,
  secrets_manager_security_db_encryption_access_role_arn: str = None,
  secrets_manager_security_db_encryption_secret_id: str = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `asm_server`<sup>Optional</sup> <a name="asm_server" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.asmServer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}.

---

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `secrets_manager_oracle_asm_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_access_role_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.secretsManagerOracleAsmAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}.

---

###### `secrets_manager_oracle_asm_secret_id`<sup>Optional</sup> <a name="secrets_manager_oracle_asm_secret_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.secretsManagerOracleAsmSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}.

---

###### `secrets_manager_security_db_encryption_access_role_arn`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_access_role_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}.

---

###### `secrets_manager_security_db_encryption_secret_id`<sup>Optional</sup> <a name="secrets_manager_security_db_encryption_secret_id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.secretsManagerSecurityDbEncryptionSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `put_postgre_sql_settings` <a name="put_postgre_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings"></a>

```python
def put_postgre_sql_settings(
  certificate_arn: str = None,
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `put_redshift_settings` <a name="put_redshift_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings"></a>

```python
def put_redshift_settings(
  database_name: str = None,
  port: typing.Union[int, float] = None,
  server_name: str = None
) -> None
```

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `put_sybase_ase_settings` <a name="put_sybase_ase_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings"></a>

```python
def put_sybase_ase_settings(
  certificate_arn: str = None,
  database_name: str = None,
  encrypt_password: bool | IResolvable = None,
  port: typing.Union[int, float] = None,
  server_name: str = None,
  ssl_mode: str = None
) -> None
```

###### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

###### `encrypt_password`<sup>Optional</sup> <a name="encrypt_password" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.encryptPassword"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

###### `server_name`<sup>Optional</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.sslMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

##### `reset_doc_db_settings` <a name="reset_doc_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings"></a>

```python
def reset_doc_db_settings() -> None
```

##### `reset_ibm_db2_luw_settings` <a name="reset_ibm_db2_luw_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings"></a>

```python
def reset_ibm_db2_luw_settings() -> None
```

##### `reset_ibm_db2_z_os_settings` <a name="reset_ibm_db2_z_os_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZOsSettings"></a>

```python
def reset_ibm_db2_z_os_settings() -> None
```

##### `reset_maria_db_settings` <a name="reset_maria_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings"></a>

```python
def reset_maria_db_settings() -> None
```

##### `reset_microsoft_sql_server_settings` <a name="reset_microsoft_sql_server_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings"></a>

```python
def reset_microsoft_sql_server_settings() -> None
```

##### `reset_mongo_db_settings` <a name="reset_mongo_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings"></a>

```python
def reset_mongo_db_settings() -> None
```

##### `reset_my_sql_settings` <a name="reset_my_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMySqlSettings"></a>

```python
def reset_my_sql_settings() -> None
```

##### `reset_oracle_settings` <a name="reset_oracle_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings"></a>

```python
def reset_oracle_settings() -> None
```

##### `reset_postgre_sql_settings` <a name="reset_postgre_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgreSqlSettings"></a>

```python
def reset_postgre_sql_settings() -> None
```

##### `reset_redshift_settings` <a name="reset_redshift_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings"></a>

```python
def reset_redshift_settings() -> None
```

##### `reset_sybase_ase_settings` <a name="reset_sybase_ase_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings"></a>

```python
def reset_sybase_ase_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings">doc_db_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference">DmsDataProviderSettingsDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings">ibm_db2_luw_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference">DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettings">ibm_db2_z_os_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference">DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings">maria_db_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference">DmsDataProviderSettingsMariaDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings">microsoft_sql_server_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference">DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings">mongo_db_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference">DmsDataProviderSettingsMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mySqlSettings">my_sql_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference">DmsDataProviderSettingsMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings">oracle_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference">DmsDataProviderSettingsOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgreSqlSettings">postgre_sql_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference">DmsDataProviderSettingsPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings">redshift_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference">DmsDataProviderSettingsRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings">sybase_ase_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference">DmsDataProviderSettingsSybaseAseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput">doc_db_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput">ibm_db2_luw_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettingsInput">ibm_db2_z_os_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput">maria_db_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput">microsoft_sql_server_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput">mongo_db_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mySqlSettingsInput">my_sql_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput">oracle_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgreSqlSettingsInput">postgre_sql_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput">redshift_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput">sybase_ase_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `doc_db_settings`<sup>Required</sup> <a name="doc_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings"></a>

```python
doc_db_settings: DmsDataProviderSettingsDocDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference">DmsDataProviderSettingsDocDbSettingsOutputReference</a>

---

##### `ibm_db2_luw_settings`<sup>Required</sup> <a name="ibm_db2_luw_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings"></a>

```python
ibm_db2_luw_settings: DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference">DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference</a>

---

##### `ibm_db2_z_os_settings`<sup>Required</sup> <a name="ibm_db2_z_os_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettings"></a>

```python
ibm_db2_z_os_settings: DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference">DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference</a>

---

##### `maria_db_settings`<sup>Required</sup> <a name="maria_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings"></a>

```python
maria_db_settings: DmsDataProviderSettingsMariaDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference">DmsDataProviderSettingsMariaDbSettingsOutputReference</a>

---

##### `microsoft_sql_server_settings`<sup>Required</sup> <a name="microsoft_sql_server_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings"></a>

```python
microsoft_sql_server_settings: DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference">DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference</a>

---

##### `mongo_db_settings`<sup>Required</sup> <a name="mongo_db_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings"></a>

```python
mongo_db_settings: DmsDataProviderSettingsMongoDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference">DmsDataProviderSettingsMongoDbSettingsOutputReference</a>

---

##### `my_sql_settings`<sup>Required</sup> <a name="my_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mySqlSettings"></a>

```python
my_sql_settings: DmsDataProviderSettingsMySqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference">DmsDataProviderSettingsMySqlSettingsOutputReference</a>

---

##### `oracle_settings`<sup>Required</sup> <a name="oracle_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings"></a>

```python
oracle_settings: DmsDataProviderSettingsOracleSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference">DmsDataProviderSettingsOracleSettingsOutputReference</a>

---

##### `postgre_sql_settings`<sup>Required</sup> <a name="postgre_sql_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgreSqlSettings"></a>

```python
postgre_sql_settings: DmsDataProviderSettingsPostgreSqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference">DmsDataProviderSettingsPostgreSqlSettingsOutputReference</a>

---

##### `redshift_settings`<sup>Required</sup> <a name="redshift_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings"></a>

```python
redshift_settings: DmsDataProviderSettingsRedshiftSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference">DmsDataProviderSettingsRedshiftSettingsOutputReference</a>

---

##### `sybase_ase_settings`<sup>Required</sup> <a name="sybase_ase_settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings"></a>

```python
sybase_ase_settings: DmsDataProviderSettingsSybaseAseSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference">DmsDataProviderSettingsSybaseAseSettingsOutputReference</a>

---

##### `doc_db_settings_input`<sup>Optional</sup> <a name="doc_db_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput"></a>

```python
doc_db_settings_input: IResolvable | DmsDataProviderSettingsDocDbSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

---

##### `ibm_db2_luw_settings_input`<sup>Optional</sup> <a name="ibm_db2_luw_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput"></a>

```python
ibm_db2_luw_settings_input: IResolvable | DmsDataProviderSettingsIbmDb2LuwSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

---

##### `ibm_db2_z_os_settings_input`<sup>Optional</sup> <a name="ibm_db2_z_os_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettingsInput"></a>

```python
ibm_db2_z_os_settings_input: IResolvable | DmsDataProviderSettingsIbmDb2ZOsSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a>

---

##### `maria_db_settings_input`<sup>Optional</sup> <a name="maria_db_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput"></a>

```python
maria_db_settings_input: IResolvable | DmsDataProviderSettingsMariaDbSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

---

##### `microsoft_sql_server_settings_input`<sup>Optional</sup> <a name="microsoft_sql_server_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput"></a>

```python
microsoft_sql_server_settings_input: IResolvable | DmsDataProviderSettingsMicrosoftSqlServerSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

---

##### `mongo_db_settings_input`<sup>Optional</sup> <a name="mongo_db_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput"></a>

```python
mongo_db_settings_input: IResolvable | DmsDataProviderSettingsMongoDbSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

---

##### `my_sql_settings_input`<sup>Optional</sup> <a name="my_sql_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mySqlSettingsInput"></a>

```python
my_sql_settings_input: IResolvable | DmsDataProviderSettingsMySqlSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a>

---

##### `oracle_settings_input`<sup>Optional</sup> <a name="oracle_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput"></a>

```python
oracle_settings_input: IResolvable | DmsDataProviderSettingsOracleSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

---

##### `postgre_sql_settings_input`<sup>Optional</sup> <a name="postgre_sql_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgreSqlSettingsInput"></a>

```python
postgre_sql_settings_input: IResolvable | DmsDataProviderSettingsPostgreSqlSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a>

---

##### `redshift_settings_input`<sup>Optional</sup> <a name="redshift_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput"></a>

```python
redshift_settings_input: IResolvable | DmsDataProviderSettingsRedshiftSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

---

##### `sybase_ase_settings_input`<sup>Optional</sup> <a name="sybase_ase_settings_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput"></a>

```python
sybase_ase_settings_input: IResolvable | DmsDataProviderSettingsSybaseAseSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

---


### DmsDataProviderSettingsPostgreSqlSettingsOutputReference <a name="DmsDataProviderSettingsPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsPostgreSqlSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a>

---


### DmsDataProviderSettingsRedshiftSettingsOutputReference <a name="DmsDataProviderSettingsRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsRedshiftSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

---


### DmsDataProviderSettingsSybaseAseSettingsOutputReference <a name="DmsDataProviderSettingsSybaseAseSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword">reset_encrypt_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_encrypt_password` <a name="reset_encrypt_password" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword"></a>

```python
def reset_encrypt_password() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput">encrypt_password_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword">encrypt_password</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `encrypt_password_input`<sup>Optional</sup> <a name="encrypt_password_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput"></a>

```python
encrypt_password_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `encrypt_password`<sup>Required</sup> <a name="encrypt_password" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword"></a>

```python
encrypt_password: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderSettingsSybaseAseSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

---


### DmsDataProviderTagsList <a name="DmsDataProviderTagsList" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsDataProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsDataProviderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>]

---


### DmsDataProviderTagsOutputReference <a name="DmsDataProviderTagsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_data_provider

dmsDataProvider.DmsDataProviderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsDataProviderTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags">DmsDataProviderTags</a>

---



