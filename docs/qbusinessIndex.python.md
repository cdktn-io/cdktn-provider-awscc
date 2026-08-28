# `qbusinessIndex` Submodule <a name="`qbusinessIndex` Submodule" id="@cdktn/provider-awscc.qbusinessIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessIndex <a name="QbusinessIndex" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index awscc_qbusiness_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndex(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  display_name: str,
  capacity_configuration: QbusinessIndexCapacityConfiguration = None,
  description: str = None,
  document_attribute_configurations: IResolvable | typing.List[QbusinessIndexDocumentAttributeConfigurations] = None,
  tags: IResolvable | typing.List[QbusinessIndexTags] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#application_id QbusinessIndex#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#display_name QbusinessIndex#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.capacityConfiguration">capacity_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#capacity_configuration QbusinessIndex#capacity_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#description QbusinessIndex#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.documentAttributeConfigurations">document_attribute_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#document_attribute_configurations QbusinessIndex#document_attribute_configurations}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#tags QbusinessIndex#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#type QbusinessIndex#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#application_id QbusinessIndex#application_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#display_name QbusinessIndex#display_name}.

---

##### `capacity_configuration`<sup>Optional</sup> <a name="capacity_configuration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.capacityConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#capacity_configuration QbusinessIndex#capacity_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#description QbusinessIndex#description}.

---

##### `document_attribute_configurations`<sup>Optional</sup> <a name="document_attribute_configurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.documentAttributeConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#document_attribute_configurations QbusinessIndex#document_attribute_configurations}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#tags QbusinessIndex#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#type QbusinessIndex#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putCapacityConfiguration">put_capacity_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putDocumentAttributeConfigurations">put_document_attribute_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetCapacityConfiguration">reset_capacity_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetDocumentAttributeConfigurations">reset_document_attribute_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity_configuration` <a name="put_capacity_configuration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putCapacityConfiguration"></a>

```python
def put_capacity_configuration(
  units: typing.Union[int, float] = None
) -> None
```

###### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putCapacityConfiguration.parameter.units"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#units QbusinessIndex#units}.

---

##### `put_document_attribute_configurations` <a name="put_document_attribute_configurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putDocumentAttributeConfigurations"></a>

```python
def put_document_attribute_configurations(
  value: IResolvable | typing.List[QbusinessIndexDocumentAttributeConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putDocumentAttributeConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QbusinessIndexTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>]

---

##### `reset_capacity_configuration` <a name="reset_capacity_configuration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetCapacityConfiguration"></a>

```python
def reset_capacity_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_document_attribute_configurations` <a name="reset_document_attribute_configurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetDocumentAttributeConfigurations"></a>

```python
def reset_document_attribute_configurations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QbusinessIndex resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isConstruct"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformElement"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformResource"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndex.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QbusinessIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QbusinessIndex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QbusinessIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.capacityConfiguration">capacity_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference">QbusinessIndexCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.documentAttributeConfigurations">document_attribute_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList">QbusinessIndexDocumentAttributeConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexArn">index_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexStatistics">index_statistics</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference">QbusinessIndexIndexStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList">QbusinessIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.capacityConfigurationInput">capacity_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.documentAttributeConfigurationsInput">document_attribute_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capacity_configuration`<sup>Required</sup> <a name="capacity_configuration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.capacityConfiguration"></a>

```python
capacity_configuration: QbusinessIndexCapacityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference">QbusinessIndexCapacityConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `document_attribute_configurations`<sup>Required</sup> <a name="document_attribute_configurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.documentAttributeConfigurations"></a>

```python
document_attribute_configurations: QbusinessIndexDocumentAttributeConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList">QbusinessIndexDocumentAttributeConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_arn`<sup>Required</sup> <a name="index_arn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexArn"></a>

```python
index_arn: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `index_statistics`<sup>Required</sup> <a name="index_statistics" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.indexStatistics"></a>

```python
index_statistics: QbusinessIndexIndexStatisticsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference">QbusinessIndexIndexStatisticsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tags"></a>

```python
tags: QbusinessIndexTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList">QbusinessIndexTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `capacity_configuration_input`<sup>Optional</sup> <a name="capacity_configuration_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.capacityConfigurationInput"></a>

```python
capacity_configuration_input: IResolvable | QbusinessIndexCapacityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `document_attribute_configurations_input`<sup>Optional</sup> <a name="document_attribute_configurations_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.documentAttributeConfigurationsInput"></a>

```python
document_attribute_configurations_input: IResolvable | typing.List[QbusinessIndexDocumentAttributeConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QbusinessIndexTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessIndexCapacityConfiguration <a name="QbusinessIndexCapacityConfiguration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexCapacityConfiguration(
  units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration.property.units">units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#units QbusinessIndex#units}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration.property.units"></a>

```python
units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#units QbusinessIndex#units}.

---

### QbusinessIndexConfig <a name="QbusinessIndexConfig" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  display_name: str,
  capacity_configuration: QbusinessIndexCapacityConfiguration = None,
  description: str = None,
  document_attribute_configurations: IResolvable | typing.List[QbusinessIndexDocumentAttributeConfigurations] = None,
  tags: IResolvable | typing.List[QbusinessIndexTags] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#application_id QbusinessIndex#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#display_name QbusinessIndex#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.capacityConfiguration">capacity_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#capacity_configuration QbusinessIndex#capacity_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#description QbusinessIndex#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.documentAttributeConfigurations">document_attribute_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#document_attribute_configurations QbusinessIndex#document_attribute_configurations}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#tags QbusinessIndex#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#type QbusinessIndex#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#application_id QbusinessIndex#application_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#display_name QbusinessIndex#display_name}.

---

##### `capacity_configuration`<sup>Optional</sup> <a name="capacity_configuration" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.capacityConfiguration"></a>

```python
capacity_configuration: QbusinessIndexCapacityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#capacity_configuration QbusinessIndex#capacity_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#description QbusinessIndex#description}.

---

##### `document_attribute_configurations`<sup>Optional</sup> <a name="document_attribute_configurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.documentAttributeConfigurations"></a>

```python
document_attribute_configurations: IResolvable | typing.List[QbusinessIndexDocumentAttributeConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#document_attribute_configurations QbusinessIndex#document_attribute_configurations}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QbusinessIndexTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#tags QbusinessIndex#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#type QbusinessIndex#type}.

---

### QbusinessIndexDocumentAttributeConfigurations <a name="QbusinessIndexDocumentAttributeConfigurations" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations(
  name: str = None,
  search: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#name QbusinessIndex#name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.search">search</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#search QbusinessIndex#search}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#type QbusinessIndex#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#name QbusinessIndex#name}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.search"></a>

```python
search: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#search QbusinessIndex#search}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#type QbusinessIndex#type}.

---

### QbusinessIndexIndexStatistics <a name="QbusinessIndexIndexStatistics" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatistics.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexIndexStatistics()
```


### QbusinessIndexIndexStatisticsTextDocumentStatistics <a name="QbusinessIndexIndexStatisticsTextDocumentStatistics" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatistics()
```


### QbusinessIndexTags <a name="QbusinessIndexTags" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#key QbusinessIndex#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#value QbusinessIndex#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#key QbusinessIndex#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/qbusiness_index#value QbusinessIndex#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessIndexCapacityConfigurationOutputReference <a name="QbusinessIndexCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resetUnits">reset_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_units` <a name="reset_units" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.resetUnits"></a>

```python
def reset_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.unitsInput">units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.units">units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `units_input`<sup>Optional</sup> <a name="units_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.unitsInput"></a>

```python
units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.units"></a>

```python
units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessIndexCapacityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexCapacityConfiguration">QbusinessIndexCapacityConfiguration</a>

---


### QbusinessIndexDocumentAttributeConfigurationsList <a name="QbusinessIndexDocumentAttributeConfigurationsList" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QbusinessIndexDocumentAttributeConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QbusinessIndexDocumentAttributeConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>]

---


### QbusinessIndexDocumentAttributeConfigurationsOutputReference <a name="QbusinessIndexDocumentAttributeConfigurationsOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.searchInput">search_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.search">search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.searchInput"></a>

```python
search_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.search"></a>

```python
search: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessIndexDocumentAttributeConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexDocumentAttributeConfigurations">QbusinessIndexDocumentAttributeConfigurations</a>

---


### QbusinessIndexIndexStatisticsOutputReference <a name="QbusinessIndexIndexStatisticsOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.textDocumentStatistics">text_document_statistics</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference">QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatistics">QbusinessIndexIndexStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_document_statistics`<sup>Required</sup> <a name="text_document_statistics" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```python
text_document_statistics: QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference">QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: QbusinessIndexIndexStatistics
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatistics">QbusinessIndexIndexStatistics</a>

---


### QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">indexed_text_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentCount">indexed_text_document_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatistics">QbusinessIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `indexed_text_bytes`<sup>Required</sup> <a name="indexed_text_bytes" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```python
indexed_text_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `indexed_text_document_count`<sup>Required</sup> <a name="indexed_text_document_count" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentCount"></a>

```python
indexed_text_document_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: QbusinessIndexIndexStatisticsTextDocumentStatistics
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexIndexStatisticsTextDocumentStatistics">QbusinessIndexIndexStatisticsTextDocumentStatistics</a>

---


### QbusinessIndexTagsList <a name="QbusinessIndexTagsList" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QbusinessIndexTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QbusinessIndexTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>]

---


### QbusinessIndexTagsOutputReference <a name="QbusinessIndexTagsOutputReference" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_index

qbusinessIndex.QbusinessIndexTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessIndexTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessIndex.QbusinessIndexTags">QbusinessIndexTags</a>

---



