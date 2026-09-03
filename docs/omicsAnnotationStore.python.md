# `omicsAnnotationStore` Submodule <a name="`omicsAnnotationStore` Submodule" id="@cdktn/provider-awscc.omicsAnnotationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsAnnotationStore <a name="OmicsAnnotationStore" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store awscc_omics_annotation_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStore(
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
  store_format: str,
  description: str = None,
  reference: OmicsAnnotationStoreReference = None,
  sse_config: OmicsAnnotationStoreSseConfig = None,
  store_options: OmicsAnnotationStoreStoreOptions = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.storeFormat">store_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.storeOptions">store_options</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}.

---

##### `store_format`<sup>Required</sup> <a name="store_format" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.storeFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}.

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.reference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}.

---

##### `sse_config`<sup>Optional</sup> <a name="sse_config" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.sseConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}.

---

##### `store_options`<sup>Optional</sup> <a name="store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.storeOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference">put_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig">put_sse_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions">put_store_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference">reset_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig">reset_sse_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions">reset_store_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_reference` <a name="put_reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference"></a>

```python
def put_reference(
  reference_arn: str = None
) -> None
```

###### `reference_arn`<sup>Optional</sup> <a name="reference_arn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference.parameter.referenceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}.

---

##### `put_sse_config` <a name="put_sse_config" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig"></a>

```python
def put_sse_config(
  key_arn: str = None,
  type: str = None
) -> None
```

###### `key_arn`<sup>Optional</sup> <a name="key_arn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig.parameter.keyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}.

---

##### `put_store_options` <a name="put_store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions"></a>

```python
def put_store_options(
  tsv_store_options: OmicsAnnotationStoreStoreOptionsTsvStoreOptions = None
) -> None
```

###### `tsv_store_options`<sup>Optional</sup> <a name="tsv_store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions.parameter.tsvStoreOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_reference` <a name="reset_reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference"></a>

```python
def reset_reference() -> None
```

##### `reset_sse_config` <a name="reset_sse_config" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig"></a>

```python
def reset_sse_config() -> None
```

##### `reset_store_options` <a name="reset_store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions"></a>

```python
def reset_store_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OmicsAnnotationStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OmicsAnnotationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OmicsAnnotationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId">annotation_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn">store_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions">store_options</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes">store_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput">reference_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput">sse_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput">store_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput">store_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat">store_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `annotation_store_id`<sup>Required</sup> <a name="annotation_store_id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId"></a>

```python
annotation_store_id: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference"></a>

```python
reference: OmicsAnnotationStoreReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a>

---

##### `sse_config`<sup>Required</sup> <a name="sse_config" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig"></a>

```python
sse_config: OmicsAnnotationStoreSseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `store_arn`<sup>Required</sup> <a name="store_arn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn"></a>

```python
store_arn: str
```

- *Type:* str

---

##### `store_options`<sup>Required</sup> <a name="store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions"></a>

```python
store_options: OmicsAnnotationStoreStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a>

---

##### `store_size_bytes`<sup>Required</sup> <a name="store_size_bytes" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes"></a>

```python
store_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `reference_input`<sup>Optional</sup> <a name="reference_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput"></a>

```python
reference_input: IResolvable | OmicsAnnotationStoreReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---

##### `sse_config_input`<sup>Optional</sup> <a name="sse_config_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput"></a>

```python
sse_config_input: IResolvable | OmicsAnnotationStoreSseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---

##### `store_format_input`<sup>Optional</sup> <a name="store_format_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput"></a>

```python
store_format_input: str
```

- *Type:* str

---

##### `store_options_input`<sup>Optional</sup> <a name="store_options_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput"></a>

```python
store_options_input: IResolvable | OmicsAnnotationStoreStoreOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `store_format`<sup>Required</sup> <a name="store_format" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat"></a>

```python
store_format: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsAnnotationStoreConfig <a name="OmicsAnnotationStoreConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  store_format: str,
  description: str = None,
  reference: OmicsAnnotationStoreReference = None,
  sse_config: OmicsAnnotationStoreSseConfig = None,
  store_options: OmicsAnnotationStoreStoreOptions = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat">store_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig">sse_config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions">store_options</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}.

---

##### `store_format`<sup>Required</sup> <a name="store_format" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat"></a>

```python
store_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}.

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference"></a>

```python
reference: OmicsAnnotationStoreReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}.

---

##### `sse_config`<sup>Optional</sup> <a name="sse_config" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig"></a>

```python
sse_config: OmicsAnnotationStoreSseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}.

---

##### `store_options`<sup>Optional</sup> <a name="store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions"></a>

```python
store_options: OmicsAnnotationStoreStoreOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}.

---

### OmicsAnnotationStoreReference <a name="OmicsAnnotationStoreReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStoreReference(
  reference_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn">reference_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}. |

---

##### `reference_arn`<sup>Optional</sup> <a name="reference_arn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn"></a>

```python
reference_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}.

---

### OmicsAnnotationStoreSseConfig <a name="OmicsAnnotationStoreSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStoreSseConfig(
  key_arn: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn">key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}. |

---

##### `key_arn`<sup>Optional</sup> <a name="key_arn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}.

---

### OmicsAnnotationStoreStoreOptions <a name="OmicsAnnotationStoreStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStoreStoreOptions(
  tsv_store_options: OmicsAnnotationStoreStoreOptionsTsvStoreOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions">tsv_store_options</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}. |

---

##### `tsv_store_options`<sup>Optional</sup> <a name="tsv_store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions"></a>

```python
tsv_store_options: OmicsAnnotationStoreStoreOptionsTsvStoreOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}.

---

### OmicsAnnotationStoreStoreOptionsTsvStoreOptions <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions(
  annotation_type: str = None,
  format_to_header: typing.Mapping[str] = None,
  schema: IResolvable | typing.List[typing.Mapping[str]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType">annotation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader">format_to_header</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema">schema</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}. |

---

##### `annotation_type`<sup>Optional</sup> <a name="annotation_type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType"></a>

```python
annotation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}.

---

##### `format_to_header`<sup>Optional</sup> <a name="format_to_header" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader"></a>

```python
format_to_header: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema"></a>

```python
schema: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsAnnotationStoreReferenceOutputReference <a name="OmicsAnnotationStoreReferenceOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn">reset_reference_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_reference_arn` <a name="reset_reference_arn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn"></a>

```python
def reset_reference_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput">reference_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn">reference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reference_arn_input`<sup>Optional</sup> <a name="reference_arn_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput"></a>

```python
reference_arn_input: str
```

- *Type:* str

---

##### `reference_arn`<sup>Required</sup> <a name="reference_arn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn"></a>

```python
reference_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OmicsAnnotationStoreReference
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---


### OmicsAnnotationStoreSseConfigOutputReference <a name="OmicsAnnotationStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn">reset_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_arn` <a name="reset_key_arn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn"></a>

```python
def reset_key_arn() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput">key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_arn_input`<sup>Optional</sup> <a name="key_arn_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput"></a>

```python
key_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OmicsAnnotationStoreSseConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---


### OmicsAnnotationStoreStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions">put_tsv_store_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions">reset_tsv_store_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tsv_store_options` <a name="put_tsv_store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions"></a>

```python
def put_tsv_store_options(
  annotation_type: str = None,
  format_to_header: typing.Mapping[str] = None,
  schema: IResolvable | typing.List[typing.Mapping[str]] = None
) -> None
```

###### `annotation_type`<sup>Optional</sup> <a name="annotation_type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions.parameter.annotationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}.

---

###### `format_to_header`<sup>Optional</sup> <a name="format_to_header" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions.parameter.formatToHeader"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}.

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions.parameter.schema"></a>

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}.

---

##### `reset_tsv_store_options` <a name="reset_tsv_store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions"></a>

```python
def reset_tsv_store_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions">tsv_store_options</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput">tsv_store_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tsv_store_options`<sup>Required</sup> <a name="tsv_store_options" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions"></a>

```python
tsv_store_options: OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a>

---

##### `tsv_store_options_input`<sup>Optional</sup> <a name="tsv_store_options_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput"></a>

```python
tsv_store_options_input: IResolvable | OmicsAnnotationStoreStoreOptionsTsvStoreOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OmicsAnnotationStoreStoreOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---


### OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import omics_annotation_store

omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType">reset_annotation_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader">reset_format_to_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotation_type` <a name="reset_annotation_type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType"></a>

```python
def reset_annotation_type() -> None
```

##### `reset_format_to_header` <a name="reset_format_to_header" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader"></a>

```python
def reset_format_to_header() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput">annotation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput">format_to_header_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput">schema_input</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType">annotation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader">format_to_header</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema">schema</a></code> | <code>cdktn.IResolvable \| typing.List[typing.Mapping[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotation_type_input`<sup>Optional</sup> <a name="annotation_type_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput"></a>

```python
annotation_type_input: str
```

- *Type:* str

---

##### `format_to_header_input`<sup>Optional</sup> <a name="format_to_header_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput"></a>

```python
format_to_header_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput"></a>

```python
schema_input: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

---

##### `annotation_type`<sup>Required</sup> <a name="annotation_type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType"></a>

```python
annotation_type: str
```

- *Type:* str

---

##### `format_to_header`<sup>Required</sup> <a name="format_to_header" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader"></a>

```python
format_to_header: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema"></a>

```python
schema: IResolvable | typing.List[typing.Mapping[str]]
```

- *Type:* cdktn.IResolvable | typing.List[typing.Mapping[str]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OmicsAnnotationStoreStoreOptionsTsvStoreOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---



