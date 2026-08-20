# `b2BiTransformer` Submodule <a name="`b2BiTransformer` Submodule" id="@cdktn/provider-awscc.b2BiTransformer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### B2BiTransformer <a name="B2BiTransformer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer awscc_b2bi_transformer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformer(
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
  status: str,
  edi_type: B2BiTransformerEdiType = None,
  file_format: str = None,
  input_conversion: B2BiTransformerInputConversion = None,
  mapping: B2BiTransformerMapping = None,
  mapping_template: str = None,
  output_conversion: B2BiTransformerOutputConversion = None,
  sample_document: str = None,
  sample_documents: B2BiTransformerSampleDocuments = None,
  tags: IResolvable | typing.List[B2BiTransformerTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.ediType">edi_type</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.fileFormat">file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.inputConversion">input_conversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.mapping">mapping</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.mappingTemplate">mapping_template</a></code> | <code>str</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.outputConversion">output_conversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.sampleDocument">sample_document</a></code> | <code>str</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.sampleDocuments">sample_documents</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}.

---

##### `edi_type`<sup>Optional</sup> <a name="edi_type" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.ediType"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}.

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.fileFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}.

---

##### `input_conversion`<sup>Optional</sup> <a name="input_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.inputConversion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}.

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.mapping"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}.

---

##### `mapping_template`<sup>Optional</sup> <a name="mapping_template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.mappingTemplate"></a>

- *Type:* str

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping_template B2BiTransformer#mapping_template}

---

##### `output_conversion`<sup>Optional</sup> <a name="output_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.outputConversion"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}.

---

##### `sample_document`<sup>Optional</sup> <a name="sample_document" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.sampleDocument"></a>

- *Type:* str

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_document B2BiTransformer#sample_document}

---

##### `sample_documents`<sup>Optional</sup> <a name="sample_documents" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.sampleDocuments"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType">put_edi_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion">put_input_conversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping">put_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion">put_output_conversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments">put_sample_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetEdiType">reset_edi_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetFileFormat">reset_file_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetInputConversion">reset_input_conversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMapping">reset_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMappingTemplate">reset_mapping_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOutputConversion">reset_output_conversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocument">reset_sample_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocuments">reset_sample_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_edi_type` <a name="put_edi_type" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType"></a>

```python
def put_edi_type(
  x12_details: B2BiTransformerEdiTypeX12Details = None
) -> None
```

###### `x12_details`<sup>Optional</sup> <a name="x12_details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType.parameter.x12Details"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}.

---

##### `put_input_conversion` <a name="put_input_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion"></a>

```python
def put_input_conversion(
  advanced_options: B2BiTransformerInputConversionAdvancedOptions = None,
  format_options: B2BiTransformerInputConversionFormatOptions = None,
  from_format: str = None
) -> None
```

###### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion.parameter.advancedOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

###### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion.parameter.formatOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

###### `from_format`<sup>Optional</sup> <a name="from_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion.parameter.fromFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}.

---

##### `put_mapping` <a name="put_mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping"></a>

```python
def put_mapping(
  template: str = None,
  template_language: str = None
) -> None
```

###### `template`<sup>Optional</sup> <a name="template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping.parameter.template"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}.

---

###### `template_language`<sup>Optional</sup> <a name="template_language" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping.parameter.templateLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}.

---

##### `put_output_conversion` <a name="put_output_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion"></a>

```python
def put_output_conversion(
  advanced_options: B2BiTransformerOutputConversionAdvancedOptions = None,
  format_options: B2BiTransformerOutputConversionFormatOptions = None,
  to_format: str = None
) -> None
```

###### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion.parameter.advancedOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

###### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion.parameter.formatOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

###### `to_format`<sup>Optional</sup> <a name="to_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion.parameter.toFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}.

---

##### `put_sample_documents` <a name="put_sample_documents" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments"></a>

```python
def put_sample_documents(
  bucket_name: str = None,
  keys: IResolvable | typing.List[B2BiTransformerSampleDocumentsKeys] = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}.

---

###### `keys`<sup>Optional</sup> <a name="keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments.parameter.keys"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[B2BiTransformerTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>]

---

##### `reset_edi_type` <a name="reset_edi_type" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetEdiType"></a>

```python
def reset_edi_type() -> None
```

##### `reset_file_format` <a name="reset_file_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetFileFormat"></a>

```python
def reset_file_format() -> None
```

##### `reset_input_conversion` <a name="reset_input_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetInputConversion"></a>

```python
def reset_input_conversion() -> None
```

##### `reset_mapping` <a name="reset_mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMapping"></a>

```python
def reset_mapping() -> None
```

##### `reset_mapping_template` <a name="reset_mapping_template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMappingTemplate"></a>

```python
def reset_mapping_template() -> None
```

##### `reset_output_conversion` <a name="reset_output_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOutputConversion"></a>

```python
def reset_output_conversion() -> None
```

##### `reset_sample_document` <a name="reset_sample_document" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocument"></a>

```python
def reset_sample_document() -> None
```

##### `reset_sample_documents` <a name="reset_sample_documents" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocuments"></a>

```python
def reset_sample_documents() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a B2BiTransformer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a B2BiTransformer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the B2BiTransformer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing B2BiTransformer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the B2BiTransformer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediType">edi_type</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference">B2BiTransformerEdiTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversion">input_conversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference">B2BiTransformerInputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mapping">mapping</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference">B2BiTransformerMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversion">output_conversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference">B2BiTransformerOutputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocuments">sample_documents</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference">B2BiTransformerSampleDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList">B2BiTransformerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerArn">transformer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerId">transformer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediTypeInput">edi_type_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormatInput">file_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversionInput">input_conversion_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingInput">mapping_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplateInput">mapping_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversionInput">output_conversion_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentInput">sample_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentsInput">sample_documents_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormat">file_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplate">mapping_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocument">sample_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `edi_type`<sup>Required</sup> <a name="edi_type" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediType"></a>

```python
edi_type: B2BiTransformerEdiTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference">B2BiTransformerEdiTypeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_conversion`<sup>Required</sup> <a name="input_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversion"></a>

```python
input_conversion: B2BiTransformerInputConversionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference">B2BiTransformerInputConversionOutputReference</a>

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mapping"></a>

```python
mapping: B2BiTransformerMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference">B2BiTransformerMappingOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `output_conversion`<sup>Required</sup> <a name="output_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversion"></a>

```python
output_conversion: B2BiTransformerOutputConversionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference">B2BiTransformerOutputConversionOutputReference</a>

---

##### `sample_documents`<sup>Required</sup> <a name="sample_documents" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocuments"></a>

```python
sample_documents: B2BiTransformerSampleDocumentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference">B2BiTransformerSampleDocumentsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tags"></a>

```python
tags: B2BiTransformerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList">B2BiTransformerTagsList</a>

---

##### `transformer_arn`<sup>Required</sup> <a name="transformer_arn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerArn"></a>

```python
transformer_arn: str
```

- *Type:* str

---

##### `transformer_id`<sup>Required</sup> <a name="transformer_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerId"></a>

```python
transformer_id: str
```

- *Type:* str

---

##### `edi_type_input`<sup>Optional</sup> <a name="edi_type_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediTypeInput"></a>

```python
edi_type_input: IResolvable | B2BiTransformerEdiType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

---

##### `file_format_input`<sup>Optional</sup> <a name="file_format_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormatInput"></a>

```python
file_format_input: str
```

- *Type:* str

---

##### `input_conversion_input`<sup>Optional</sup> <a name="input_conversion_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversionInput"></a>

```python
input_conversion_input: IResolvable | B2BiTransformerInputConversion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

---

##### `mapping_input`<sup>Optional</sup> <a name="mapping_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingInput"></a>

```python
mapping_input: IResolvable | B2BiTransformerMapping
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

---

##### `mapping_template_input`<sup>Optional</sup> <a name="mapping_template_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplateInput"></a>

```python
mapping_template_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `output_conversion_input`<sup>Optional</sup> <a name="output_conversion_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversionInput"></a>

```python
output_conversion_input: IResolvable | B2BiTransformerOutputConversion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

---

##### `sample_document_input`<sup>Optional</sup> <a name="sample_document_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentInput"></a>

```python
sample_document_input: str
```

- *Type:* str

---

##### `sample_documents_input`<sup>Optional</sup> <a name="sample_documents_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentsInput"></a>

```python
sample_documents_input: IResolvable | B2BiTransformerSampleDocuments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[B2BiTransformerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>]

---

##### `file_format`<sup>Required</sup> <a name="file_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

---

##### `mapping_template`<sup>Required</sup> <a name="mapping_template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplate"></a>

```python
mapping_template: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sample_document`<sup>Required</sup> <a name="sample_document" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocument"></a>

```python
sample_document: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### B2BiTransformerConfig <a name="B2BiTransformerConfig" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  status: str,
  edi_type: B2BiTransformerEdiType = None,
  file_format: str = None,
  input_conversion: B2BiTransformerInputConversion = None,
  mapping: B2BiTransformerMapping = None,
  mapping_template: str = None,
  output_conversion: B2BiTransformerOutputConversion = None,
  sample_document: str = None,
  sample_documents: B2BiTransformerSampleDocuments = None,
  tags: IResolvable | typing.List[B2BiTransformerTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.ediType">edi_type</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.fileFormat">file_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.inputConversion">input_conversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mapping">mapping</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mappingTemplate">mapping_template</a></code> | <code>str</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.outputConversion">output_conversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocument">sample_document</a></code> | <code>str</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocuments">sample_documents</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}.

---

##### `edi_type`<sup>Optional</sup> <a name="edi_type" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.ediType"></a>

```python
edi_type: B2BiTransformerEdiType
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}.

---

##### `file_format`<sup>Optional</sup> <a name="file_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.fileFormat"></a>

```python
file_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}.

---

##### `input_conversion`<sup>Optional</sup> <a name="input_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.inputConversion"></a>

```python
input_conversion: B2BiTransformerInputConversion
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}.

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mapping"></a>

```python
mapping: B2BiTransformerMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}.

---

##### `mapping_template`<sup>Optional</sup> <a name="mapping_template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mappingTemplate"></a>

```python
mapping_template: str
```

- *Type:* str

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping_template B2BiTransformer#mapping_template}

---

##### `output_conversion`<sup>Optional</sup> <a name="output_conversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.outputConversion"></a>

```python
output_conversion: B2BiTransformerOutputConversion
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}.

---

##### `sample_document`<sup>Optional</sup> <a name="sample_document" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocument"></a>

```python
sample_document: str
```

- *Type:* str

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_document B2BiTransformer#sample_document}

---

##### `sample_documents`<sup>Optional</sup> <a name="sample_documents" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocuments"></a>

```python
sample_documents: B2BiTransformerSampleDocuments
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[B2BiTransformerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}.

---

### B2BiTransformerEdiType <a name="B2BiTransformerEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerEdiType(
  x12_details: B2BiTransformerEdiTypeX12Details = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.property.x12Details">x12_details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}. |

---

##### `x12_details`<sup>Optional</sup> <a name="x12_details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.property.x12Details"></a>

```python
x12_details: B2BiTransformerEdiTypeX12Details
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}.

---

### B2BiTransformerEdiTypeX12Details <a name="B2BiTransformerEdiTypeX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerEdiTypeX12Details(
  transaction_set: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.transactionSet">transaction_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `transaction_set`<sup>Optional</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerInputConversion <a name="B2BiTransformerInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversion(
  advanced_options: B2BiTransformerInputConversionAdvancedOptions = None,
  format_options: B2BiTransformerInputConversionFormatOptions = None,
  from_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.advancedOptions">advanced_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.fromFormat">from_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}. |

---

##### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.advancedOptions"></a>

```python
advanced_options: B2BiTransformerInputConversionAdvancedOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

##### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.formatOptions"></a>

```python
format_options: B2BiTransformerInputConversionFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

##### `from_format`<sup>Optional</sup> <a name="from_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.fromFormat"></a>

```python
from_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}.

---

### B2BiTransformerInputConversionAdvancedOptions <a name="B2BiTransformerInputConversionAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions(
  x12: B2BiTransformerInputConversionAdvancedOptionsX12 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.property.x12"></a>

```python
x12: B2BiTransformerInputConversionAdvancedOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12 <a name="B2BiTransformerInputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12(
  split_options: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions = None,
  validation_options: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.splitOptions">split_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.validationOptions">validation_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}. |

---

##### `split_options`<sup>Optional</sup> <a name="split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.splitOptions"></a>

```python
split_options: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

##### `validation_options`<sup>Optional</sup> <a name="validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.validationOptions"></a>

```python
validation_options: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions <a name="B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions(
  split_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.property.splitBy">split_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}. |

---

##### `split_by`<sup>Optional</sup> <a name="split_by" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.property.splitBy"></a>

```python
split_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions(
  validation_rules: IResolvable | typing.List[B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.property.validationRules">validation_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}. |

---

##### `validation_rules`<sup>Optional</sup> <a name="validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.property.validationRules"></a>

```python
validation_rules: IResolvable | typing.List[B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules(
  code_list_validation_rule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule = None,
  element_length_validation_rule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule = None,
  element_requirement_validation_rule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule">code_list_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule">element_length_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule">element_requirement_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}. |

---

##### `code_list_validation_rule`<sup>Optional</sup> <a name="code_list_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule"></a>

```python
code_list_validation_rule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}.

---

##### `element_length_validation_rule`<sup>Optional</sup> <a name="element_length_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule"></a>

```python
element_length_validation_rule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}.

---

##### `element_requirement_validation_rule`<sup>Optional</sup> <a name="element_requirement_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule"></a>

```python
element_requirement_validation_rule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule(
  codes_to_add: typing.List[str] = None,
  codes_to_remove: typing.List[str] = None,
  element_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd">codes_to_add</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove">codes_to_remove</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |

---

##### `codes_to_add`<sup>Optional</sup> <a name="codes_to_add" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd"></a>

```python
codes_to_add: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

##### `codes_to_remove`<sup>Optional</sup> <a name="codes_to_remove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove"></a>

```python
codes_to_remove: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

##### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule(
  element_id: str = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}. |

---

##### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule(
  element_position: str = None,
  requirement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition">element_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement">requirement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}. |

---

##### `element_position`<sup>Optional</sup> <a name="element_position" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition"></a>

```python
element_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

##### `requirement`<sup>Optional</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

### B2BiTransformerInputConversionFormatOptions <a name="B2BiTransformerInputConversionFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionFormatOptions(
  x12: B2BiTransformerInputConversionFormatOptionsX12 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.property.x12"></a>

```python
x12: B2BiTransformerInputConversionFormatOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerInputConversionFormatOptionsX12 <a name="B2BiTransformerInputConversionFormatOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12(
  transaction_set: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.transactionSet">transaction_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `transaction_set`<sup>Optional</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerMapping <a name="B2BiTransformerMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerMapping(
  template: str = None,
  template_language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.template">template</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.templateLanguage">template_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}. |

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.template"></a>

```python
template: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}.

---

##### `template_language`<sup>Optional</sup> <a name="template_language" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.templateLanguage"></a>

```python
template_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}.

---

### B2BiTransformerOutputConversion <a name="B2BiTransformerOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversion(
  advanced_options: B2BiTransformerOutputConversionAdvancedOptions = None,
  format_options: B2BiTransformerOutputConversionFormatOptions = None,
  to_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.advancedOptions">advanced_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.toFormat">to_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}. |

---

##### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.advancedOptions"></a>

```python
advanced_options: B2BiTransformerOutputConversionAdvancedOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

##### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.formatOptions"></a>

```python
format_options: B2BiTransformerOutputConversionFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

##### `to_format`<sup>Optional</sup> <a name="to_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.toFormat"></a>

```python
to_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}.

---

### B2BiTransformerOutputConversionAdvancedOptions <a name="B2BiTransformerOutputConversionAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions(
  x12: B2BiTransformerOutputConversionAdvancedOptionsX12 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.property.x12"></a>

```python
x12: B2BiTransformerOutputConversionAdvancedOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12 <a name="B2BiTransformerOutputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12(
  split_options: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions = None,
  validation_options: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.splitOptions">split_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.validationOptions">validation_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}. |

---

##### `split_options`<sup>Optional</sup> <a name="split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.splitOptions"></a>

```python
split_options: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

##### `validation_options`<sup>Optional</sup> <a name="validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.validationOptions"></a>

```python
validation_options: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions <a name="B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions(
  split_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.property.splitBy">split_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}. |

---

##### `split_by`<sup>Optional</sup> <a name="split_by" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.property.splitBy"></a>

```python
split_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions(
  validation_rules: IResolvable | typing.List[B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.property.validationRules">validation_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}. |

---

##### `validation_rules`<sup>Optional</sup> <a name="validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.property.validationRules"></a>

```python
validation_rules: IResolvable | typing.List[B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules(
  code_list_validation_rule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule = None,
  element_length_validation_rule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule = None,
  element_requirement_validation_rule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule">code_list_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule">element_length_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule">element_requirement_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}. |

---

##### `code_list_validation_rule`<sup>Optional</sup> <a name="code_list_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule"></a>

```python
code_list_validation_rule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}.

---

##### `element_length_validation_rule`<sup>Optional</sup> <a name="element_length_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule"></a>

```python
element_length_validation_rule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}.

---

##### `element_requirement_validation_rule`<sup>Optional</sup> <a name="element_requirement_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule"></a>

```python
element_requirement_validation_rule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule(
  codes_to_add: typing.List[str] = None,
  codes_to_remove: typing.List[str] = None,
  element_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd">codes_to_add</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove">codes_to_remove</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |

---

##### `codes_to_add`<sup>Optional</sup> <a name="codes_to_add" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd"></a>

```python
codes_to_add: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

##### `codes_to_remove`<sup>Optional</sup> <a name="codes_to_remove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove"></a>

```python
codes_to_remove: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

##### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule(
  element_id: str = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}. |

---

##### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule(
  element_position: str = None,
  requirement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition">element_position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement">requirement</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}. |

---

##### `element_position`<sup>Optional</sup> <a name="element_position" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition"></a>

```python
element_position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

##### `requirement`<sup>Optional</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

### B2BiTransformerOutputConversionFormatOptions <a name="B2BiTransformerOutputConversionFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionFormatOptions(
  x12: B2BiTransformerOutputConversionFormatOptionsX12 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.property.x12"></a>

```python
x12: B2BiTransformerOutputConversionFormatOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerOutputConversionFormatOptionsX12 <a name="B2BiTransformerOutputConversionFormatOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12(
  transaction_set: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.transactionSet">transaction_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `transaction_set`<sup>Optional</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerSampleDocuments <a name="B2BiTransformerSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerSampleDocuments(
  bucket_name: str = None,
  keys: IResolvable | typing.List[B2BiTransformerSampleDocumentsKeys] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.keys">keys</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}.

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.keys"></a>

```python
keys: IResolvable | typing.List[B2BiTransformerSampleDocumentsKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}.

---

### B2BiTransformerSampleDocumentsKeys <a name="B2BiTransformerSampleDocumentsKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerSampleDocumentsKeys(
  input: str = None,
  output: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input B2BiTransformer#input}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.output">output</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output B2BiTransformer#output}. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.input"></a>

```python
input: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input B2BiTransformer#input}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.output"></a>

```python
output: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output B2BiTransformer#output}.

---

### B2BiTransformerTags <a name="B2BiTransformerTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#key B2BiTransformer#key}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#value B2BiTransformer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#key B2BiTransformer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#value B2BiTransformer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### B2BiTransformerEdiTypeOutputReference <a name="B2BiTransformerEdiTypeOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerEdiTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details">put_x12_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resetX12Details">reset_x12_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_x12_details` <a name="put_x12_details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details"></a>

```python
def put_x12_details(
  transaction_set: str = None,
  version: str = None
) -> None
```

###### `transaction_set`<sup>Optional</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details.parameter.transactionSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

##### `reset_x12_details` <a name="reset_x12_details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resetX12Details"></a>

```python
def reset_x12_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12Details">x12_details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference">B2BiTransformerEdiTypeX12DetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12DetailsInput">x12_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12_details`<sup>Required</sup> <a name="x12_details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12Details"></a>

```python
x12_details: B2BiTransformerEdiTypeX12DetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference">B2BiTransformerEdiTypeX12DetailsOutputReference</a>

---

##### `x12_details_input`<sup>Optional</sup> <a name="x12_details_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12DetailsInput"></a>

```python
x12_details_input: IResolvable | B2BiTransformerEdiTypeX12Details
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerEdiType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

---


### B2BiTransformerEdiTypeX12DetailsOutputReference <a name="B2BiTransformerEdiTypeX12DetailsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetTransactionSet">reset_transaction_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_transaction_set` <a name="reset_transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetTransactionSet"></a>

```python
def reset_transaction_set() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSetInput">transaction_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet">transaction_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transaction_set_input`<sup>Optional</sup> <a name="transaction_set_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSetInput"></a>

```python
transaction_set_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `transaction_set`<sup>Required</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerEdiTypeX12Details
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

---


### B2BiTransformerInputConversionAdvancedOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12">put_x12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resetX12">reset_x12</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_x12` <a name="put_x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12"></a>

```python
def put_x12(
  split_options: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions = None,
  validation_options: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions = None
) -> None
```

###### `split_options`<sup>Optional</sup> <a name="split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12.parameter.splitOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

###### `validation_options`<sup>Optional</sup> <a name="validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12.parameter.validationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

##### `reset_x12` <a name="reset_x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resetX12"></a>

```python
def reset_x12() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference">B2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12Input">x12_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12"></a>

```python
x12: B2BiTransformerInputConversionAdvancedOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference">B2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a>

---

##### `x12_input`<sup>Optional</sup> <a name="x12_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12Input"></a>

```python
x12_input: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionAdvancedOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12OutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions">put_split_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions">put_validation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetSplitOptions">reset_split_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetValidationOptions">reset_validation_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_split_options` <a name="put_split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions"></a>

```python
def put_split_options(
  split_by: str = None
) -> None
```

###### `split_by`<sup>Optional</sup> <a name="split_by" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions.parameter.splitBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

##### `put_validation_options` <a name="put_validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions"></a>

```python
def put_validation_options(
  validation_rules: IResolvable | typing.List[B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules] = None
) -> None
```

###### `validation_rules`<sup>Optional</sup> <a name="validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions.parameter.validationRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

##### `reset_split_options` <a name="reset_split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetSplitOptions"></a>

```python
def reset_split_options() -> None
```

##### `reset_validation_options` <a name="reset_validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetValidationOptions"></a>

```python
def reset_validation_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions">split_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions">validation_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput">split_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput">validation_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_options`<sup>Required</sup> <a name="split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```python
split_options: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `validation_options`<sup>Required</sup> <a name="validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```python
validation_options: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `split_options_input`<sup>Optional</sup> <a name="split_options_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput"></a>

```python
split_options_input: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `validation_options_input`<sup>Optional</sup> <a name="validation_options_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput"></a>

```python
validation_options_input: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy">reset_split_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_split_by` <a name="reset_split_by" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy"></a>

```python
def reset_split_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput">split_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">split_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_by_input`<sup>Optional</sup> <a name="split_by_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput"></a>

```python
split_by_input: str
```

- *Type:* str

---

##### `split_by`<sup>Required</sup> <a name="split_by" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```python
split_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules">put_validation_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules">reset_validation_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_validation_rules` <a name="put_validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules"></a>

```python
def put_validation_rules(
  value: IResolvable | typing.List[B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

---

##### `reset_validation_rules` <a name="reset_validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules"></a>

```python
def reset_validation_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">validation_rules</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput">validation_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `validation_rules`<sup>Required</sup> <a name="validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```python
validation_rules: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `validation_rules_input`<sup>Optional</sup> <a name="validation_rules_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput"></a>

```python
validation_rules_input: IResolvable | typing.List[B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd">reset_codes_to_add</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove">reset_codes_to_remove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId">reset_element_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_codes_to_add` <a name="reset_codes_to_add" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd"></a>

```python
def reset_codes_to_add() -> None
```

##### `reset_codes_to_remove` <a name="reset_codes_to_remove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove"></a>

```python
def reset_codes_to_remove() -> None
```

##### `reset_element_id` <a name="reset_element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId"></a>

```python
def reset_element_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput">codes_to_add_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput">codes_to_remove_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">codes_to_add</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">codes_to_remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `codes_to_add_input`<sup>Optional</sup> <a name="codes_to_add_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput"></a>

```python
codes_to_add_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codes_to_remove_input`<sup>Optional</sup> <a name="codes_to_remove_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput"></a>

```python
codes_to_remove_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `codes_to_add`<sup>Required</sup> <a name="codes_to_add" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```python
codes_to_add: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codes_to_remove`<sup>Required</sup> <a name="codes_to_remove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```python
codes_to_remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId">reset_element_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength">reset_min_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_element_id` <a name="reset_element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId"></a>

```python
def reset_element_id() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength"></a>

```python
def reset_min_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition">reset_element_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement">reset_requirement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_element_position` <a name="reset_element_position" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition"></a>

```python
def reset_element_position() -> None
```

##### `reset_requirement` <a name="reset_requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement"></a>

```python
def reset_requirement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput">element_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput">requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">element_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_position_input`<sup>Optional</sup> <a name="element_position_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput"></a>

```python
element_position_input: str
```

- *Type:* str

---

##### `requirement_input`<sup>Optional</sup> <a name="requirement_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput"></a>

```python
requirement_input: str
```

- *Type:* str

---

##### `element_position`<sup>Required</sup> <a name="element_position" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```python
element_position: str
```

- *Type:* str

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule">put_code_list_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule">put_element_length_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule">put_element_requirement_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule">reset_code_list_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule">reset_element_length_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule">reset_element_requirement_validation_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_list_validation_rule` <a name="put_code_list_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule"></a>

```python
def put_code_list_validation_rule(
  codes_to_add: typing.List[str] = None,
  codes_to_remove: typing.List[str] = None,
  element_id: str = None
) -> None
```

###### `codes_to_add`<sup>Optional</sup> <a name="codes_to_add" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.codesToAdd"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

###### `codes_to_remove`<sup>Optional</sup> <a name="codes_to_remove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.codesToRemove"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

###### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `put_element_length_validation_rule` <a name="put_element_length_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule"></a>

```python
def put_element_length_validation_rule(
  element_id: str = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None
) -> None
```

###### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

###### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

###### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

##### `put_element_requirement_validation_rule` <a name="put_element_requirement_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule"></a>

```python
def put_element_requirement_validation_rule(
  element_position: str = None,
  requirement: str = None
) -> None
```

###### `element_position`<sup>Optional</sup> <a name="element_position" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.elementPosition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

###### `requirement`<sup>Optional</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.requirement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

##### `reset_code_list_validation_rule` <a name="reset_code_list_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule"></a>

```python
def reset_code_list_validation_rule() -> None
```

##### `reset_element_length_validation_rule` <a name="reset_element_length_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule"></a>

```python
def reset_element_length_validation_rule() -> None
```

##### `reset_element_requirement_validation_rule` <a name="reset_element_requirement_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule"></a>

```python
def reset_element_requirement_validation_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">code_list_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">element_length_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">element_requirement_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput">code_list_validation_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput">element_length_validation_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput">element_requirement_validation_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_list_validation_rule`<sup>Required</sup> <a name="code_list_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```python
code_list_validation_rule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `element_length_validation_rule`<sup>Required</sup> <a name="element_length_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```python
element_length_validation_rule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `element_requirement_validation_rule`<sup>Required</sup> <a name="element_requirement_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```python
element_requirement_validation_rule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `code_list_validation_rule_input`<sup>Optional</sup> <a name="code_list_validation_rule_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput"></a>

```python
code_list_validation_rule_input: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `element_length_validation_rule_input`<sup>Optional</sup> <a name="element_length_validation_rule_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput"></a>

```python
element_length_validation_rule_input: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `element_requirement_validation_rule_input`<sup>Optional</sup> <a name="element_requirement_validation_rule_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput"></a>

```python
element_requirement_validation_rule_input: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### B2BiTransformerInputConversionFormatOptionsOutputReference <a name="B2BiTransformerInputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12">put_x12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resetX12">reset_x12</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_x12` <a name="put_x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12"></a>

```python
def put_x12(
  transaction_set: str = None,
  version: str = None
) -> None
```

###### `transaction_set`<sup>Optional</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12.parameter.transactionSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

##### `reset_x12` <a name="reset_x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resetX12"></a>

```python
def reset_x12() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference">B2BiTransformerInputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12Input">x12_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12"></a>

```python
x12: B2BiTransformerInputConversionFormatOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference">B2BiTransformerInputConversionFormatOptionsX12OutputReference</a>

---

##### `x12_input`<sup>Optional</sup> <a name="x12_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12Input"></a>

```python
x12_input: IResolvable | B2BiTransformerInputConversionFormatOptionsX12
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

---


### B2BiTransformerInputConversionFormatOptionsX12OutputReference <a name="B2BiTransformerInputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetTransactionSet">reset_transaction_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_transaction_set` <a name="reset_transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetTransactionSet"></a>

```python
def reset_transaction_set() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSetInput">transaction_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet">transaction_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transaction_set_input`<sup>Optional</sup> <a name="transaction_set_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSetInput"></a>

```python
transaction_set_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `transaction_set`<sup>Required</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversionFormatOptionsX12
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

---


### B2BiTransformerInputConversionOutputReference <a name="B2BiTransformerInputConversionOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerInputConversionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions">put_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions">put_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetAdvancedOptions">reset_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFormatOptions">reset_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFromFormat">reset_from_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_options` <a name="put_advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions"></a>

```python
def put_advanced_options(
  x12: B2BiTransformerInputConversionAdvancedOptionsX12 = None
) -> None
```

###### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions.parameter.x12"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

##### `put_format_options` <a name="put_format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions"></a>

```python
def put_format_options(
  x12: B2BiTransformerInputConversionFormatOptionsX12 = None
) -> None
```

###### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions.parameter.x12"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

##### `reset_advanced_options` <a name="reset_advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetAdvancedOptions"></a>

```python
def reset_advanced_options() -> None
```

##### `reset_format_options` <a name="reset_format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFormatOptions"></a>

```python
def reset_format_options() -> None
```

##### `reset_from_format` <a name="reset_from_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFromFormat"></a>

```python
def reset_from_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptions">advanced_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference">B2BiTransformerInputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptionsInput">advanced_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptionsInput">format_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormatInput">from_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormat">from_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_options`<sup>Required</sup> <a name="advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptions"></a>

```python
advanced_options: B2BiTransformerInputConversionAdvancedOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsOutputReference</a>

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptions"></a>

```python
format_options: B2BiTransformerInputConversionFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference">B2BiTransformerInputConversionFormatOptionsOutputReference</a>

---

##### `advanced_options_input`<sup>Optional</sup> <a name="advanced_options_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptionsInput"></a>

```python
advanced_options_input: IResolvable | B2BiTransformerInputConversionAdvancedOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

---

##### `format_options_input`<sup>Optional</sup> <a name="format_options_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptionsInput"></a>

```python
format_options_input: IResolvable | B2BiTransformerInputConversionFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

---

##### `from_format_input`<sup>Optional</sup> <a name="from_format_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormatInput"></a>

```python
from_format_input: str
```

- *Type:* str

---

##### `from_format`<sup>Required</sup> <a name="from_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormat"></a>

```python
from_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerInputConversion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

---


### B2BiTransformerMappingOutputReference <a name="B2BiTransformerMappingOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplate">reset_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplateLanguage">reset_template_language</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_template` <a name="reset_template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplate"></a>

```python
def reset_template() -> None
```

##### `reset_template_language` <a name="reset_template_language" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplateLanguage"></a>

```python
def reset_template_language() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguageInput">template_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.template">template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguage">template_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `template_language_input`<sup>Optional</sup> <a name="template_language_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguageInput"></a>

```python
template_language_input: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.template"></a>

```python
template: str
```

- *Type:* str

---

##### `template_language`<sup>Required</sup> <a name="template_language" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguage"></a>

```python
template_language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerMapping
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12">put_x12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resetX12">reset_x12</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_x12` <a name="put_x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12"></a>

```python
def put_x12(
  split_options: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions = None,
  validation_options: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions = None
) -> None
```

###### `split_options`<sup>Optional</sup> <a name="split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12.parameter.splitOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

###### `validation_options`<sup>Optional</sup> <a name="validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12.parameter.validationOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

##### `reset_x12` <a name="reset_x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resetX12"></a>

```python
def reset_x12() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12Input">x12_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12"></a>

```python
x12: B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a>

---

##### `x12_input`<sup>Optional</sup> <a name="x12_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12Input"></a>

```python
x12_input: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionAdvancedOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions">put_split_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions">put_validation_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetSplitOptions">reset_split_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetValidationOptions">reset_validation_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_split_options` <a name="put_split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions"></a>

```python
def put_split_options(
  split_by: str = None
) -> None
```

###### `split_by`<sup>Optional</sup> <a name="split_by" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions.parameter.splitBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

##### `put_validation_options` <a name="put_validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions"></a>

```python
def put_validation_options(
  validation_rules: IResolvable | typing.List[B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules] = None
) -> None
```

###### `validation_rules`<sup>Optional</sup> <a name="validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions.parameter.validationRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

##### `reset_split_options` <a name="reset_split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetSplitOptions"></a>

```python
def reset_split_options() -> None
```

##### `reset_validation_options` <a name="reset_validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetValidationOptions"></a>

```python
def reset_validation_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions">split_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions">validation_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput">split_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput">validation_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_options`<sup>Required</sup> <a name="split_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```python
split_options: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `validation_options`<sup>Required</sup> <a name="validation_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```python
validation_options: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `split_options_input`<sup>Optional</sup> <a name="split_options_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput"></a>

```python
split_options_input: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `validation_options_input`<sup>Optional</sup> <a name="validation_options_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput"></a>

```python
validation_options_input: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy">reset_split_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_split_by` <a name="reset_split_by" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy"></a>

```python
def reset_split_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput">split_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">split_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `split_by_input`<sup>Optional</sup> <a name="split_by_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput"></a>

```python
split_by_input: str
```

- *Type:* str

---

##### `split_by`<sup>Required</sup> <a name="split_by" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```python
split_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules">put_validation_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules">reset_validation_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_validation_rules` <a name="put_validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules"></a>

```python
def put_validation_rules(
  value: IResolvable | typing.List[B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

---

##### `reset_validation_rules` <a name="reset_validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules"></a>

```python
def reset_validation_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">validation_rules</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput">validation_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `validation_rules`<sup>Required</sup> <a name="validation_rules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```python
validation_rules: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `validation_rules_input`<sup>Optional</sup> <a name="validation_rules_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput"></a>

```python
validation_rules_input: IResolvable | typing.List[B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd">reset_codes_to_add</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove">reset_codes_to_remove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId">reset_element_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_codes_to_add` <a name="reset_codes_to_add" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd"></a>

```python
def reset_codes_to_add() -> None
```

##### `reset_codes_to_remove` <a name="reset_codes_to_remove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove"></a>

```python
def reset_codes_to_remove() -> None
```

##### `reset_element_id` <a name="reset_element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId"></a>

```python
def reset_element_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput">codes_to_add_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput">codes_to_remove_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">codes_to_add</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">codes_to_remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `codes_to_add_input`<sup>Optional</sup> <a name="codes_to_add_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput"></a>

```python
codes_to_add_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codes_to_remove_input`<sup>Optional</sup> <a name="codes_to_remove_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput"></a>

```python
codes_to_remove_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `codes_to_add`<sup>Required</sup> <a name="codes_to_add" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```python
codes_to_add: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `codes_to_remove`<sup>Required</sup> <a name="codes_to_remove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```python
codes_to_remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId">reset_element_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength">reset_min_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_element_id` <a name="reset_element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId"></a>

```python
def reset_element_id() -> None
```

##### `reset_max_length` <a name="reset_max_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength"></a>

```python
def reset_min_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput">max_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput">min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput"></a>

```python
max_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput"></a>

```python
min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition">reset_element_position</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement">reset_requirement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_element_position` <a name="reset_element_position" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition"></a>

```python
def reset_element_position() -> None
```

##### `reset_requirement` <a name="reset_requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement"></a>

```python
def reset_requirement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput">element_position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput">requirement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">element_position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">requirement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_position_input`<sup>Optional</sup> <a name="element_position_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput"></a>

```python
element_position_input: str
```

- *Type:* str

---

##### `requirement_input`<sup>Optional</sup> <a name="requirement_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput"></a>

```python
requirement_input: str
```

- *Type:* str

---

##### `element_position`<sup>Required</sup> <a name="element_position" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```python
element_position: str
```

- *Type:* str

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```python
requirement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>]

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule">put_code_list_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule">put_element_length_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule">put_element_requirement_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule">reset_code_list_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule">reset_element_length_validation_rule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule">reset_element_requirement_validation_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_code_list_validation_rule` <a name="put_code_list_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule"></a>

```python
def put_code_list_validation_rule(
  codes_to_add: typing.List[str] = None,
  codes_to_remove: typing.List[str] = None,
  element_id: str = None
) -> None
```

###### `codes_to_add`<sup>Optional</sup> <a name="codes_to_add" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.codesToAdd"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

###### `codes_to_remove`<sup>Optional</sup> <a name="codes_to_remove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.codesToRemove"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

###### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `put_element_length_validation_rule` <a name="put_element_length_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule"></a>

```python
def put_element_length_validation_rule(
  element_id: str = None,
  max_length: typing.Union[int, float] = None,
  min_length: typing.Union[int, float] = None
) -> None
```

###### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

###### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.maxLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

###### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.minLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

##### `put_element_requirement_validation_rule` <a name="put_element_requirement_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule"></a>

```python
def put_element_requirement_validation_rule(
  element_position: str = None,
  requirement: str = None
) -> None
```

###### `element_position`<sup>Optional</sup> <a name="element_position" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.elementPosition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

###### `requirement`<sup>Optional</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.requirement"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

##### `reset_code_list_validation_rule` <a name="reset_code_list_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule"></a>

```python
def reset_code_list_validation_rule() -> None
```

##### `reset_element_length_validation_rule` <a name="reset_element_length_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule"></a>

```python
def reset_element_length_validation_rule() -> None
```

##### `reset_element_requirement_validation_rule` <a name="reset_element_requirement_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule"></a>

```python
def reset_element_requirement_validation_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">code_list_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">element_length_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">element_requirement_validation_rule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput">code_list_validation_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput">element_length_validation_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput">element_requirement_validation_rule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_list_validation_rule`<sup>Required</sup> <a name="code_list_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```python
code_list_validation_rule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `element_length_validation_rule`<sup>Required</sup> <a name="element_length_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```python
element_length_validation_rule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `element_requirement_validation_rule`<sup>Required</sup> <a name="element_requirement_validation_rule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```python
element_requirement_validation_rule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `code_list_validation_rule_input`<sup>Optional</sup> <a name="code_list_validation_rule_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput"></a>

```python
code_list_validation_rule_input: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `element_length_validation_rule_input`<sup>Optional</sup> <a name="element_length_validation_rule_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput"></a>

```python
element_length_validation_rule_input: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `element_requirement_validation_rule_input`<sup>Optional</sup> <a name="element_requirement_validation_rule_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput"></a>

```python
element_requirement_validation_rule_input: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### B2BiTransformerOutputConversionFormatOptionsOutputReference <a name="B2BiTransformerOutputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12">put_x12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resetX12">reset_x12</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_x12` <a name="put_x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12"></a>

```python
def put_x12(
  transaction_set: str = None,
  version: str = None
) -> None
```

###### `transaction_set`<sup>Optional</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12.parameter.transactionSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

##### `reset_x12` <a name="reset_x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resetX12"></a>

```python
def reset_x12() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference">B2BiTransformerOutputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12Input">x12_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12"></a>

```python
x12: B2BiTransformerOutputConversionFormatOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference">B2BiTransformerOutputConversionFormatOptionsX12OutputReference</a>

---

##### `x12_input`<sup>Optional</sup> <a name="x12_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12Input"></a>

```python
x12_input: IResolvable | B2BiTransformerOutputConversionFormatOptionsX12
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

---


### B2BiTransformerOutputConversionFormatOptionsX12OutputReference <a name="B2BiTransformerOutputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetTransactionSet">reset_transaction_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_transaction_set` <a name="reset_transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetTransactionSet"></a>

```python
def reset_transaction_set() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSetInput">transaction_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet">transaction_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transaction_set_input`<sup>Optional</sup> <a name="transaction_set_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSetInput"></a>

```python
transaction_set_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `transaction_set`<sup>Required</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversionFormatOptionsX12
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

---


### B2BiTransformerOutputConversionOutputReference <a name="B2BiTransformerOutputConversionOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerOutputConversionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions">put_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions">put_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetAdvancedOptions">reset_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetFormatOptions">reset_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetToFormat">reset_to_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_options` <a name="put_advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions"></a>

```python
def put_advanced_options(
  x12: B2BiTransformerOutputConversionAdvancedOptionsX12 = None
) -> None
```

###### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions.parameter.x12"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

##### `put_format_options` <a name="put_format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions"></a>

```python
def put_format_options(
  x12: B2BiTransformerOutputConversionFormatOptionsX12 = None
) -> None
```

###### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions.parameter.x12"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

##### `reset_advanced_options` <a name="reset_advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetAdvancedOptions"></a>

```python
def reset_advanced_options() -> None
```

##### `reset_format_options` <a name="reset_format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetFormatOptions"></a>

```python
def reset_format_options() -> None
```

##### `reset_to_format` <a name="reset_to_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetToFormat"></a>

```python
def reset_to_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptions">advanced_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptions">format_options</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference">B2BiTransformerOutputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptionsInput">advanced_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptionsInput">format_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormatInput">to_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormat">to_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_options`<sup>Required</sup> <a name="advanced_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptions"></a>

```python
advanced_options: B2BiTransformerOutputConversionAdvancedOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsOutputReference</a>

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptions"></a>

```python
format_options: B2BiTransformerOutputConversionFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference">B2BiTransformerOutputConversionFormatOptionsOutputReference</a>

---

##### `advanced_options_input`<sup>Optional</sup> <a name="advanced_options_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptionsInput"></a>

```python
advanced_options_input: IResolvable | B2BiTransformerOutputConversionAdvancedOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

---

##### `format_options_input`<sup>Optional</sup> <a name="format_options_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptionsInput"></a>

```python
format_options_input: IResolvable | B2BiTransformerOutputConversionFormatOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

---

##### `to_format_input`<sup>Optional</sup> <a name="to_format_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormatInput"></a>

```python
to_format_input: str
```

- *Type:* str

---

##### `to_format`<sup>Required</sup> <a name="to_format" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormat"></a>

```python
to_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerOutputConversion
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

---


### B2BiTransformerSampleDocumentsKeysList <a name="B2BiTransformerSampleDocumentsKeysList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerSampleDocumentsKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> B2BiTransformerSampleDocumentsKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[B2BiTransformerSampleDocumentsKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>]

---


### B2BiTransformerSampleDocumentsKeysOutputReference <a name="B2BiTransformerSampleDocumentsKeysOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetOutput">reset_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input` <a name="reset_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetOutput"></a>

```python
def reset_output() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.outputInput">output_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.output">output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.outputInput"></a>

```python
output_input: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.output"></a>

```python
output: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerSampleDocumentsKeys
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>

---


### B2BiTransformerSampleDocumentsOutputReference <a name="B2BiTransformerSampleDocumentsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys">put_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetKeys">reset_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_keys` <a name="put_keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys"></a>

```python
def put_keys(
  value: IResolvable | typing.List[B2BiTransformerSampleDocumentsKeys]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>]

---

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_keys` <a name="reset_keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetKeys"></a>

```python
def reset_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList">B2BiTransformerSampleDocumentsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keysInput">keys_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keys"></a>

```python
keys: B2BiTransformerSampleDocumentsKeysList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList">B2BiTransformerSampleDocumentsKeysList</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `keys_input`<sup>Optional</sup> <a name="keys_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keysInput"></a>

```python
keys_input: IResolvable | typing.List[B2BiTransformerSampleDocumentsKeys]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerSampleDocuments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

---


### B2BiTransformerTagsList <a name="B2BiTransformerTagsList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> B2BiTransformerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[B2BiTransformerTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>]

---


### B2BiTransformerTagsOutputReference <a name="B2BiTransformerTagsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_transformer

b2BiTransformer.B2BiTransformerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiTransformerTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>

---



