# `iotfleetwiseStateTemplate` Submodule <a name="`iotfleetwiseStateTemplate` Submodule" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseStateTemplate <a name="IotfleetwiseStateTemplate" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template awscc_iotfleetwise_state_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_state_template

iotfleetwiseStateTemplate.IotfleetwiseStateTemplate(
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
  signal_catalog_arn: str,
  state_template_properties: typing.List[str],
  data_extra_dimensions: typing.List[str] = None,
  description: str = None,
  metadata_extra_dimensions: typing.List[str] = None,
  tags: IResolvable | typing.List[IotfleetwiseStateTemplateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.signalCatalogArn">signal_catalog_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.stateTemplateProperties">state_template_properties</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.dataExtraDimensions">data_extra_dimensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.metadataExtraDimensions">metadata_extra_dimensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}.

---

##### `signal_catalog_arn`<sup>Required</sup> <a name="signal_catalog_arn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.signalCatalogArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}.

---

##### `state_template_properties`<sup>Required</sup> <a name="state_template_properties" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.stateTemplateProperties"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}.

---

##### `data_extra_dimensions`<sup>Optional</sup> <a name="data_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.dataExtraDimensions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}.

---

##### `metadata_extra_dimensions`<sup>Optional</sup> <a name="metadata_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.metadataExtraDimensions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDataExtraDimensions">reset_data_extra_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetMetadataExtraDimensions">reset_metadata_extra_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotfleetwiseStateTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>]

---

##### `reset_data_extra_dimensions` <a name="reset_data_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDataExtraDimensions"></a>

```python
def reset_data_extra_dimensions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_metadata_extra_dimensions` <a name="reset_metadata_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetMetadataExtraDimensions"></a>

```python
def reset_metadata_extra_dimensions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotfleetwiseStateTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import iotfleetwise_state_template

iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotfleetwise_state_template

iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotfleetwise_state_template

iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotfleetwise_state_template

iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotfleetwiseStateTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotfleetwiseStateTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotfleetwiseStateTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseStateTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lastModificationTime">last_modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateId">state_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList">IotfleetwiseStateTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensionsInput">data_extra_dimensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensionsInput">metadata_extra_dimensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArnInput">signal_catalog_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplatePropertiesInput">state_template_properties_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensions">data_extra_dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensions">metadata_extra_dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArn">signal_catalog_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateProperties">state_template_properties</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modification_time`<sup>Required</sup> <a name="last_modification_time" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lastModificationTime"></a>

```python
last_modification_time: str
```

- *Type:* str

---

##### `state_template_id`<sup>Required</sup> <a name="state_template_id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateId"></a>

```python
state_template_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tags"></a>

```python
tags: IotfleetwiseStateTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList">IotfleetwiseStateTemplateTagsList</a>

---

##### `data_extra_dimensions_input`<sup>Optional</sup> <a name="data_extra_dimensions_input" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensionsInput"></a>

```python
data_extra_dimensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `metadata_extra_dimensions_input`<sup>Optional</sup> <a name="metadata_extra_dimensions_input" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensionsInput"></a>

```python
metadata_extra_dimensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `signal_catalog_arn_input`<sup>Optional</sup> <a name="signal_catalog_arn_input" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArnInput"></a>

```python
signal_catalog_arn_input: str
```

- *Type:* str

---

##### `state_template_properties_input`<sup>Optional</sup> <a name="state_template_properties_input" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplatePropertiesInput"></a>

```python
state_template_properties_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotfleetwiseStateTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>]

---

##### `data_extra_dimensions`<sup>Required</sup> <a name="data_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensions"></a>

```python
data_extra_dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `metadata_extra_dimensions`<sup>Required</sup> <a name="metadata_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensions"></a>

```python
metadata_extra_dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `signal_catalog_arn`<sup>Required</sup> <a name="signal_catalog_arn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArn"></a>

```python
signal_catalog_arn: str
```

- *Type:* str

---

##### `state_template_properties`<sup>Required</sup> <a name="state_template_properties" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateProperties"></a>

```python
state_template_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseStateTemplateConfig <a name="IotfleetwiseStateTemplateConfig" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_state_template

iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  signal_catalog_arn: str,
  state_template_properties: typing.List[str],
  data_extra_dimensions: typing.List[str] = None,
  description: str = None,
  metadata_extra_dimensions: typing.List[str] = None,
  tags: IResolvable | typing.List[IotfleetwiseStateTemplateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.signalCatalogArn">signal_catalog_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.stateTemplateProperties">state_template_properties</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dataExtraDimensions">data_extra_dimensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.metadataExtraDimensions">metadata_extra_dimensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}.

---

##### `signal_catalog_arn`<sup>Required</sup> <a name="signal_catalog_arn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.signalCatalogArn"></a>

```python
signal_catalog_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}.

---

##### `state_template_properties`<sup>Required</sup> <a name="state_template_properties" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.stateTemplateProperties"></a>

```python
state_template_properties: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}.

---

##### `data_extra_dimensions`<sup>Optional</sup> <a name="data_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dataExtraDimensions"></a>

```python
data_extra_dimensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}.

---

##### `metadata_extra_dimensions`<sup>Optional</sup> <a name="metadata_extra_dimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.metadataExtraDimensions"></a>

```python
metadata_extra_dimensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotfleetwiseStateTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}.

---

### IotfleetwiseStateTemplateTags <a name="IotfleetwiseStateTemplateTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_state_template

iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#key IotfleetwiseStateTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#value IotfleetwiseStateTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#key IotfleetwiseStateTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_state_template#value IotfleetwiseStateTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseStateTemplateTagsList <a name="IotfleetwiseStateTemplateTagsList" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_state_template

iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotfleetwiseStateTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotfleetwiseStateTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>]

---


### IotfleetwiseStateTemplateTagsOutputReference <a name="IotfleetwiseStateTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotfleetwise_state_template

iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotfleetwiseStateTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>

---



