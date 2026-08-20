# `cleanroomsAnalysisTemplate` Submodule <a name="`cleanroomsAnalysisTemplate` Submodule" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsAnalysisTemplate <a name="CleanroomsAnalysisTemplate" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template awscc_cleanrooms_analysis_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  format: str,
  membership_identifier: str,
  name: str,
  source: CleanroomsAnalysisTemplateSource,
  analysis_parameters: IResolvable | typing.List[CleanroomsAnalysisTemplateAnalysisParameters] = None,
  description: str = None,
  error_message_configuration: CleanroomsAnalysisTemplateErrorMessageConfiguration = None,
  schema: CleanroomsAnalysisTemplateSchema = None,
  source_metadata: CleanroomsAnalysisTemplateSourceMetadata = None,
  synthetic_data_parameters: CleanroomsAnalysisTemplateSyntheticDataParameters = None,
  tags: IResolvable | typing.List[CleanroomsAnalysisTemplateTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#format CleanroomsAnalysisTemplate#format}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#membership_identifier CleanroomsAnalysisTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source CleanroomsAnalysisTemplate#source}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.analysisParameters">analysis_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>]</code> | The member who can query can provide this placeholder for a literal data value in an analysis template. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#description CleanroomsAnalysisTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.errorMessageConfiguration">error_message_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#error_message_configuration CleanroomsAnalysisTemplate#error_message_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#schema CleanroomsAnalysisTemplate#schema}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.sourceMetadata">source_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source_metadata CleanroomsAnalysisTemplate#source_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.syntheticDataParameters">synthetic_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#synthetic_data_parameters CleanroomsAnalysisTemplate#synthetic_data_parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#format CleanroomsAnalysisTemplate#format}.

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.membershipIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#membership_identifier CleanroomsAnalysisTemplate#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source CleanroomsAnalysisTemplate#source}.

---

##### `analysis_parameters`<sup>Optional</sup> <a name="analysis_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.analysisParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>]

The member who can query can provide this placeholder for a literal data value in an analysis template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#analysis_parameters CleanroomsAnalysisTemplate#analysis_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#description CleanroomsAnalysisTemplate#description}.

---

##### `error_message_configuration`<sup>Optional</sup> <a name="error_message_configuration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.errorMessageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#error_message_configuration CleanroomsAnalysisTemplate#error_message_configuration}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#schema CleanroomsAnalysisTemplate#schema}.

---

##### `source_metadata`<sup>Optional</sup> <a name="source_metadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.sourceMetadata"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source_metadata CleanroomsAnalysisTemplate#source_metadata}.

---

##### `synthetic_data_parameters`<sup>Optional</sup> <a name="synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.syntheticDataParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#synthetic_data_parameters CleanroomsAnalysisTemplate#synthetic_data_parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#tags CleanroomsAnalysisTemplate#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putAnalysisParameters">put_analysis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putErrorMessageConfiguration">put_error_message_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSourceMetadata">put_source_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSyntheticDataParameters">put_synthetic_data_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetAnalysisParameters">reset_analysis_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetErrorMessageConfiguration">reset_error_message_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSourceMetadata">reset_source_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSyntheticDataParameters">reset_synthetic_data_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_analysis_parameters` <a name="put_analysis_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putAnalysisParameters"></a>

```python
def put_analysis_parameters(
  value: IResolvable | typing.List[CleanroomsAnalysisTemplateAnalysisParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putAnalysisParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>]

---

##### `put_error_message_configuration` <a name="put_error_message_configuration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putErrorMessageConfiguration"></a>

```python
def put_error_message_configuration(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putErrorMessageConfiguration.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}.

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSchema"></a>

```python
def put_schema(
  referenced_tables: typing.List[str] = None
) -> None
```

###### `referenced_tables`<sup>Optional</sup> <a name="referenced_tables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSchema.parameter.referencedTables"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#referenced_tables CleanroomsAnalysisTemplate#referenced_tables}.

---

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource"></a>

```python
def put_source(
  artifacts: CleanroomsAnalysisTemplateSourceArtifacts = None,
  text: str = None
) -> None
```

###### `artifacts`<sup>Optional</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource.parameter.artifacts"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}.

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource.parameter.text"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#text CleanroomsAnalysisTemplate#text}.

---

##### `put_source_metadata` <a name="put_source_metadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSourceMetadata"></a>

```python
def put_source_metadata(
  artifacts: CleanroomsAnalysisTemplateSourceMetadataArtifacts = None
) -> None
```

###### `artifacts`<sup>Optional</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSourceMetadata.parameter.artifacts"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}.

---

##### `put_synthetic_data_parameters` <a name="put_synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSyntheticDataParameters"></a>

```python
def put_synthetic_data_parameters(
  ml_synthetic_data_parameters: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters = None
) -> None
```

###### `ml_synthetic_data_parameters`<sup>Optional</sup> <a name="ml_synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSyntheticDataParameters.parameter.mlSyntheticDataParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#ml_synthetic_data_parameters CleanroomsAnalysisTemplate#ml_synthetic_data_parameters}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CleanroomsAnalysisTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>]

---

##### `reset_analysis_parameters` <a name="reset_analysis_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetAnalysisParameters"></a>

```python
def reset_analysis_parameters() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_error_message_configuration` <a name="reset_error_message_configuration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetErrorMessageConfiguration"></a>

```python
def reset_error_message_configuration() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_source_metadata` <a name="reset_source_metadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSourceMetadata"></a>

```python
def reset_source_metadata() -> None
```

##### `reset_synthetic_data_parameters` <a name="reset_synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSyntheticDataParameters"></a>

```python
def reset_synthetic_data_parameters() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsAnalysisTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsAnalysisTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsAnalysisTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParameters">analysis_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList">CleanroomsAnalysisTemplateAnalysisParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisTemplateIdentifier">analysis_template_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationArn">collaboration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfiguration">error_message_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipArn">membership_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference">CleanroomsAnalysisTemplateSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference">CleanroomsAnalysisTemplateSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadata">source_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference">CleanroomsAnalysisTemplateSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParameters">synthetic_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList">CleanroomsAnalysisTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParametersInput">analysis_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfigurationInput">error_message_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifierInput">membership_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schemaInput">schema_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadataInput">source_metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParametersInput">synthetic_data_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `analysis_parameters`<sup>Required</sup> <a name="analysis_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParameters"></a>

```python
analysis_parameters: CleanroomsAnalysisTemplateAnalysisParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList">CleanroomsAnalysisTemplateAnalysisParametersList</a>

---

##### `analysis_template_identifier`<sup>Required</sup> <a name="analysis_template_identifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisTemplateIdentifier"></a>

```python
analysis_template_identifier: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collaboration_arn`<sup>Required</sup> <a name="collaboration_arn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationArn"></a>

```python
collaboration_arn: str
```

- *Type:* str

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `error_message_configuration`<sup>Required</sup> <a name="error_message_configuration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfiguration"></a>

```python
error_message_configuration: CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `membership_arn`<sup>Required</sup> <a name="membership_arn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipArn"></a>

```python
membership_arn: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schema"></a>

```python
schema: CleanroomsAnalysisTemplateSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference">CleanroomsAnalysisTemplateSchemaOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.source"></a>

```python
source: CleanroomsAnalysisTemplateSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference">CleanroomsAnalysisTemplateSourceOutputReference</a>

---

##### `source_metadata`<sup>Required</sup> <a name="source_metadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadata"></a>

```python
source_metadata: CleanroomsAnalysisTemplateSourceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference">CleanroomsAnalysisTemplateSourceMetadataOutputReference</a>

---

##### `synthetic_data_parameters`<sup>Required</sup> <a name="synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParameters"></a>

```python
synthetic_data_parameters: CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tags"></a>

```python
tags: CleanroomsAnalysisTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList">CleanroomsAnalysisTemplateTagsList</a>

---

##### `analysis_parameters_input`<sup>Optional</sup> <a name="analysis_parameters_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParametersInput"></a>

```python
analysis_parameters_input: IResolvable | typing.List[CleanroomsAnalysisTemplateAnalysisParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `error_message_configuration_input`<sup>Optional</sup> <a name="error_message_configuration_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfigurationInput"></a>

```python
error_message_configuration_input: IResolvable | CleanroomsAnalysisTemplateErrorMessageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `membership_identifier_input`<sup>Optional</sup> <a name="membership_identifier_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifierInput"></a>

```python
membership_identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schemaInput"></a>

```python
schema_input: IResolvable | CleanroomsAnalysisTemplateSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceInput"></a>

```python
source_input: IResolvable | CleanroomsAnalysisTemplateSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

---

##### `source_metadata_input`<sup>Optional</sup> <a name="source_metadata_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadataInput"></a>

```python
source_metadata_input: IResolvable | CleanroomsAnalysisTemplateSourceMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

---

##### `synthetic_data_parameters_input`<sup>Optional</sup> <a name="synthetic_data_parameters_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParametersInput"></a>

```python
synthetic_data_parameters_input: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CleanroomsAnalysisTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsAnalysisTemplateAnalysisParameters <a name="CleanroomsAnalysisTemplateAnalysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters(
  default_value: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#default_value CleanroomsAnalysisTemplate#default_value}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}. |

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#default_value CleanroomsAnalysisTemplate#default_value}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}.

---

### CleanroomsAnalysisTemplateConfig <a name="CleanroomsAnalysisTemplateConfig" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  format: str,
  membership_identifier: str,
  name: str,
  source: CleanroomsAnalysisTemplateSource,
  analysis_parameters: IResolvable | typing.List[CleanroomsAnalysisTemplateAnalysisParameters] = None,
  description: str = None,
  error_message_configuration: CleanroomsAnalysisTemplateErrorMessageConfiguration = None,
  schema: CleanroomsAnalysisTemplateSchema = None,
  source_metadata: CleanroomsAnalysisTemplateSourceMetadata = None,
  synthetic_data_parameters: CleanroomsAnalysisTemplateSyntheticDataParameters = None,
  tags: IResolvable | typing.List[CleanroomsAnalysisTemplateTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#format CleanroomsAnalysisTemplate#format}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#membership_identifier CleanroomsAnalysisTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source CleanroomsAnalysisTemplate#source}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.analysisParameters">analysis_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>]</code> | The member who can query can provide this placeholder for a literal data value in an analysis template. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#description CleanroomsAnalysisTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.errorMessageConfiguration">error_message_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#error_message_configuration CleanroomsAnalysisTemplate#error_message_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#schema CleanroomsAnalysisTemplate#schema}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.sourceMetadata">source_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source_metadata CleanroomsAnalysisTemplate#source_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.syntheticDataParameters">synthetic_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#synthetic_data_parameters CleanroomsAnalysisTemplate#synthetic_data_parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#format CleanroomsAnalysisTemplate#format}.

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#membership_identifier CleanroomsAnalysisTemplate#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.source"></a>

```python
source: CleanroomsAnalysisTemplateSource
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source CleanroomsAnalysisTemplate#source}.

---

##### `analysis_parameters`<sup>Optional</sup> <a name="analysis_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.analysisParameters"></a>

```python
analysis_parameters: IResolvable | typing.List[CleanroomsAnalysisTemplateAnalysisParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>]

The member who can query can provide this placeholder for a literal data value in an analysis template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#analysis_parameters CleanroomsAnalysisTemplate#analysis_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#description CleanroomsAnalysisTemplate#description}.

---

##### `error_message_configuration`<sup>Optional</sup> <a name="error_message_configuration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.errorMessageConfiguration"></a>

```python
error_message_configuration: CleanroomsAnalysisTemplateErrorMessageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#error_message_configuration CleanroomsAnalysisTemplate#error_message_configuration}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.schema"></a>

```python
schema: CleanroomsAnalysisTemplateSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#schema CleanroomsAnalysisTemplate#schema}.

---

##### `source_metadata`<sup>Optional</sup> <a name="source_metadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.sourceMetadata"></a>

```python
source_metadata: CleanroomsAnalysisTemplateSourceMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source_metadata CleanroomsAnalysisTemplate#source_metadata}.

---

##### `synthetic_data_parameters`<sup>Optional</sup> <a name="synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.syntheticDataParameters"></a>

```python
synthetic_data_parameters: CleanroomsAnalysisTemplateSyntheticDataParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#synthetic_data_parameters CleanroomsAnalysisTemplate#synthetic_data_parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CleanroomsAnalysisTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#tags CleanroomsAnalysisTemplate#tags}

---

### CleanroomsAnalysisTemplateErrorMessageConfiguration <a name="CleanroomsAnalysisTemplateErrorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}.

---

### CleanroomsAnalysisTemplateSchema <a name="CleanroomsAnalysisTemplateSchema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema(
  referenced_tables: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema.property.referencedTables">referenced_tables</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#referenced_tables CleanroomsAnalysisTemplate#referenced_tables}. |

---

##### `referenced_tables`<sup>Optional</sup> <a name="referenced_tables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema.property.referencedTables"></a>

```python
referenced_tables: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#referenced_tables CleanroomsAnalysisTemplate#referenced_tables}.

---

### CleanroomsAnalysisTemplateSource <a name="CleanroomsAnalysisTemplateSource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource(
  artifacts: CleanroomsAnalysisTemplateSourceArtifacts = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.text">text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#text CleanroomsAnalysisTemplate#text}. |

---

##### `artifacts`<sup>Optional</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.artifacts"></a>

```python
artifacts: CleanroomsAnalysisTemplateSourceArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.text"></a>

```python
text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#text CleanroomsAnalysisTemplate#text}.

---

### CleanroomsAnalysisTemplateSourceArtifacts <a name="CleanroomsAnalysisTemplateSourceArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts(
  additional_artifacts: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts] = None,
  entry_point: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.additionalArtifacts">additional_artifacts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifacts CleanroomsAnalysisTemplate#additional_artifacts}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.entryPoint">entry_point</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point CleanroomsAnalysisTemplate#entry_point}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#role_arn CleanroomsAnalysisTemplate#role_arn}. |

---

##### `additional_artifacts`<sup>Optional</sup> <a name="additional_artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.additionalArtifacts"></a>

```python
additional_artifacts: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifacts CleanroomsAnalysisTemplate#additional_artifacts}.

---

##### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.entryPoint"></a>

```python
entry_point: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point CleanroomsAnalysisTemplate#entry_point}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#role_arn CleanroomsAnalysisTemplate#role_arn}.

---

### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts(
  location: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.property.location"></a>

```python
location: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}.

---

### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation(
  bucket: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

### CleanroomsAnalysisTemplateSourceArtifactsEntryPoint <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint(
  location: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint.property.location"></a>

```python
location: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}.

---

### CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation(
  bucket: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

### CleanroomsAnalysisTemplateSourceMetadata <a name="CleanroomsAnalysisTemplateSourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata(
  artifacts: CleanroomsAnalysisTemplateSourceMetadataArtifacts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}. |

---

##### `artifacts`<sup>Optional</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata.property.artifacts"></a>

```python
artifacts: CleanroomsAnalysisTemplateSourceMetadataArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}.

---

### CleanroomsAnalysisTemplateSourceMetadataArtifacts <a name="CleanroomsAnalysisTemplateSourceMetadataArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts(
  additional_artifact_hashes: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes] = None,
  entry_point_hash: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.additionalArtifactHashes">additional_artifact_hashes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifact_hashes CleanroomsAnalysisTemplate#additional_artifact_hashes}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.entryPointHash">entry_point_hash</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point_hash CleanroomsAnalysisTemplate#entry_point_hash}. |

---

##### `additional_artifact_hashes`<sup>Optional</sup> <a name="additional_artifact_hashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.additionalArtifactHashes"></a>

```python
additional_artifact_hashes: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifact_hashes CleanroomsAnalysisTemplate#additional_artifact_hashes}.

---

##### `entry_point_hash`<sup>Optional</sup> <a name="entry_point_hash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.entryPointHash"></a>

```python
entry_point_hash: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point_hash CleanroomsAnalysisTemplate#entry_point_hash}.

---

### CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes(
  sha256: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.property.sha256">sha256</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}. |

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}.

---

### CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash(
  sha256: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.property.sha256">sha256</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}. |

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}.

---

### CleanroomsAnalysisTemplateSyntheticDataParameters <a name="CleanroomsAnalysisTemplateSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters(
  ml_synthetic_data_parameters: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters.property.mlSyntheticDataParameters">ml_synthetic_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#ml_synthetic_data_parameters CleanroomsAnalysisTemplate#ml_synthetic_data_parameters}. |

---

##### `ml_synthetic_data_parameters`<sup>Optional</sup> <a name="ml_synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters.property.mlSyntheticDataParameters"></a>

```python
ml_synthetic_data_parameters: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#ml_synthetic_data_parameters CleanroomsAnalysisTemplate#ml_synthetic_data_parameters}.

---

### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters(
  column_classification: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification = None,
  epsilon: typing.Union[int, float] = None,
  max_membership_inference_attack_score: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.columnClassification">column_classification</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_classification CleanroomsAnalysisTemplate#column_classification}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.epsilon">epsilon</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#epsilon CleanroomsAnalysisTemplate#epsilon}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.maxMembershipInferenceAttackScore">max_membership_inference_attack_score</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#max_membership_inference_attack_score CleanroomsAnalysisTemplate#max_membership_inference_attack_score}. |

---

##### `column_classification`<sup>Optional</sup> <a name="column_classification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.columnClassification"></a>

```python
column_classification: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_classification CleanroomsAnalysisTemplate#column_classification}.

---

##### `epsilon`<sup>Optional</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.epsilon"></a>

```python
epsilon: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#epsilon CleanroomsAnalysisTemplate#epsilon}.

---

##### `max_membership_inference_attack_score`<sup>Optional</sup> <a name="max_membership_inference_attack_score" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.maxMembershipInferenceAttackScore"></a>

```python
max_membership_inference_attack_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#max_membership_inference_attack_score CleanroomsAnalysisTemplate#max_membership_inference_attack_score}.

---

### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification(
  column_mapping: IResolvable | typing.List[CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.property.columnMapping">column_mapping</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_mapping CleanroomsAnalysisTemplate#column_mapping}. |

---

##### `column_mapping`<sup>Optional</sup> <a name="column_mapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.property.columnMapping"></a>

```python
column_mapping: IResolvable | typing.List[CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_mapping CleanroomsAnalysisTemplate#column_mapping}.

---

### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping(
  column_name: str = None,
  column_type: str = None,
  is_predictive_value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnName">column_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_name CleanroomsAnalysisTemplate#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnType">column_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_type CleanroomsAnalysisTemplate#column_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.isPredictiveValue">is_predictive_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#is_predictive_value CleanroomsAnalysisTemplate#is_predictive_value}. |

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_name CleanroomsAnalysisTemplate#column_name}.

---

##### `column_type`<sup>Optional</sup> <a name="column_type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_type CleanroomsAnalysisTemplate#column_type}.

---

##### `is_predictive_value`<sup>Optional</sup> <a name="is_predictive_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.isPredictiveValue"></a>

```python
is_predictive_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#is_predictive_value CleanroomsAnalysisTemplate#is_predictive_value}.

---

### CleanroomsAnalysisTemplateTags <a name="CleanroomsAnalysisTemplateTags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#value CleanroomsAnalysisTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#value CleanroomsAnalysisTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsAnalysisTemplateAnalysisParametersList <a name="CleanroomsAnalysisTemplateAnalysisParametersList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsAnalysisTemplateAnalysisParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsAnalysisTemplateAnalysisParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>]

---


### CleanroomsAnalysisTemplateAnalysisParametersOutputReference <a name="CleanroomsAnalysisTemplateAnalysisParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_value` <a name="reset_default_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateAnalysisParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>

---


### CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference <a name="CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateErrorMessageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

---


### CleanroomsAnalysisTemplateSchemaOutputReference <a name="CleanroomsAnalysisTemplateSchemaOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resetReferencedTables">reset_referenced_tables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_referenced_tables` <a name="reset_referenced_tables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resetReferencedTables"></a>

```python
def reset_referenced_tables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTablesInput">referenced_tables_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables">referenced_tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `referenced_tables_input`<sup>Optional</sup> <a name="referenced_tables_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTablesInput"></a>

```python
referenced_tables_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `referenced_tables`<sup>Required</sup> <a name="referenced_tables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables"></a>

```python
referenced_tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSchema
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>]

---


### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resetLocation">reset_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_location` <a name="put_location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation"></a>

```python
def put_location(
  bucket: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location"></a>

```python
location: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.locationInput"></a>

```python
location_input: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resetLocation">reset_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_location` <a name="put_location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation"></a>

```python
def put_location(
  bucket: str = None,
  key: str = None
) -> None
```

###### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location"></a>

```python
location: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.locationInput"></a>

```python
location_input: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsEntryPoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putAdditionalArtifacts">put_additional_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putEntryPoint">put_entry_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetAdditionalArtifacts">reset_additional_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetEntryPoint">reset_entry_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_artifacts` <a name="put_additional_artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putAdditionalArtifacts"></a>

```python
def put_additional_artifacts(
  value: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putAdditionalArtifacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>]

---

##### `put_entry_point` <a name="put_entry_point" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putEntryPoint"></a>

```python
def put_entry_point(
  location: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation = None
) -> None
```

###### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putEntryPoint.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}.

---

##### `reset_additional_artifacts` <a name="reset_additional_artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetAdditionalArtifacts"></a>

```python
def reset_additional_artifacts() -> None
```

##### `reset_entry_point` <a name="reset_entry_point" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetEntryPoint"></a>

```python
def reset_entry_point() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts">additional_artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint">entry_point</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifactsInput">additional_artifacts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPointInput">entry_point_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_artifacts`<sup>Required</sup> <a name="additional_artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts"></a>

```python
additional_artifacts: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a>

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint"></a>

```python
entry_point: CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a>

---

##### `additional_artifacts_input`<sup>Optional</sup> <a name="additional_artifacts_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifactsInput"></a>

```python
additional_artifacts_input: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>]

---

##### `entry_point_input`<sup>Optional</sup> <a name="entry_point_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPointInput"></a>

```python
entry_point_input: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsEntryPoint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSourceArtifacts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>]

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resetSha256">reset_sha256</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sha256` <a name="reset_sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resetSha256"></a>

```python
def reset_sha256() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256Input">sha256_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256_input`<sup>Optional</sup> <a name="sha256_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256Input"></a>

```python
sha256_input: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resetSha256">reset_sha256</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sha256` <a name="reset_sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resetSha256"></a>

```python
def reset_sha256() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256Input">sha256_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256">sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sha256_input`<sup>Optional</sup> <a name="sha256_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256Input"></a>

```python
sha256_input: str
```

- *Type:* str

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256"></a>

```python
sha256: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putAdditionalArtifactHashes">put_additional_artifact_hashes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putEntryPointHash">put_entry_point_hash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetAdditionalArtifactHashes">reset_additional_artifact_hashes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetEntryPointHash">reset_entry_point_hash</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_artifact_hashes` <a name="put_additional_artifact_hashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putAdditionalArtifactHashes"></a>

```python
def put_additional_artifact_hashes(
  value: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putAdditionalArtifactHashes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>]

---

##### `put_entry_point_hash` <a name="put_entry_point_hash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putEntryPointHash"></a>

```python
def put_entry_point_hash(
  sha256: str = None
) -> None
```

###### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putEntryPointHash.parameter.sha256"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}.

---

##### `reset_additional_artifact_hashes` <a name="reset_additional_artifact_hashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetAdditionalArtifactHashes"></a>

```python
def reset_additional_artifact_hashes() -> None
```

##### `reset_entry_point_hash` <a name="reset_entry_point_hash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetEntryPointHash"></a>

```python
def reset_entry_point_hash() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes">additional_artifact_hashes</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash">entry_point_hash</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashesInput">additional_artifact_hashes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHashInput">entry_point_hash_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_artifact_hashes`<sup>Required</sup> <a name="additional_artifact_hashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes"></a>

```python
additional_artifact_hashes: CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a>

---

##### `entry_point_hash`<sup>Required</sup> <a name="entry_point_hash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash"></a>

```python
entry_point_hash: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a>

---

##### `additional_artifact_hashes_input`<sup>Optional</sup> <a name="additional_artifact_hashes_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashesInput"></a>

```python
additional_artifact_hashes_input: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>]

---

##### `entry_point_hash_input`<sup>Optional</sup> <a name="entry_point_hash_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHashInput"></a>

```python
entry_point_hash_input: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifacts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

---


### CleanroomsAnalysisTemplateSourceMetadataOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts">put_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resetArtifacts">reset_artifacts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_artifacts` <a name="put_artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts"></a>

```python
def put_artifacts(
  additional_artifact_hashes: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes] = None,
  entry_point_hash: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash = None
) -> None
```

###### `additional_artifact_hashes`<sup>Optional</sup> <a name="additional_artifact_hashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts.parameter.additionalArtifactHashes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifact_hashes CleanroomsAnalysisTemplate#additional_artifact_hashes}.

---

###### `entry_point_hash`<sup>Optional</sup> <a name="entry_point_hash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts.parameter.entryPointHash"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point_hash CleanroomsAnalysisTemplate#entry_point_hash}.

---

##### `reset_artifacts` <a name="reset_artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resetArtifacts"></a>

```python
def reset_artifacts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifactsInput">artifacts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts"></a>

```python
artifacts: CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a>

---

##### `artifacts_input`<sup>Optional</sup> <a name="artifacts_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifactsInput"></a>

```python
artifacts_input: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifacts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSourceMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

---


### CleanroomsAnalysisTemplateSourceOutputReference <a name="CleanroomsAnalysisTemplateSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts">put_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetArtifacts">reset_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_artifacts` <a name="put_artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts"></a>

```python
def put_artifacts(
  additional_artifacts: IResolvable | typing.List[CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts] = None,
  entry_point: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint = None,
  role_arn: str = None
) -> None
```

###### `additional_artifacts`<sup>Optional</sup> <a name="additional_artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts.parameter.additionalArtifacts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifacts CleanroomsAnalysisTemplate#additional_artifacts}.

---

###### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts.parameter.entryPoint"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point CleanroomsAnalysisTemplate#entry_point}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#role_arn CleanroomsAnalysisTemplate#role_arn}.

---

##### `reset_artifacts` <a name="reset_artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetArtifacts"></a>

```python
def reset_artifacts() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference">CleanroomsAnalysisTemplateSourceArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifactsInput">artifacts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifacts"></a>

```python
artifacts: CleanroomsAnalysisTemplateSourceArtifactsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference">CleanroomsAnalysisTemplateSourceArtifactsOutputReference</a>

---

##### `artifacts_input`<sup>Optional</sup> <a name="artifacts_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifactsInput"></a>

```python
artifacts_input: IResolvable | CleanroomsAnalysisTemplateSourceArtifacts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>]

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnType">reset_column_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetIsPredictiveValue">reset_is_predictive_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_column_name` <a name="reset_column_name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_column_type` <a name="reset_column_type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnType"></a>

```python
def reset_column_type() -> None
```

##### `reset_is_predictive_value` <a name="reset_is_predictive_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetIsPredictiveValue"></a>

```python
def reset_is_predictive_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnNameInput">column_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnTypeInput">column_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValueInput">is_predictive_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType">column_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue">is_predictive_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnNameInput"></a>

```python
column_name_input: str
```

- *Type:* str

---

##### `column_type_input`<sup>Optional</sup> <a name="column_type_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnTypeInput"></a>

```python
column_type_input: str
```

- *Type:* str

---

##### `is_predictive_value_input`<sup>Optional</sup> <a name="is_predictive_value_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValueInput"></a>

```python
is_predictive_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `column_type`<sup>Required</sup> <a name="column_type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType"></a>

```python
column_type: str
```

- *Type:* str

---

##### `is_predictive_value`<sup>Required</sup> <a name="is_predictive_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue"></a>

```python
is_predictive_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.putColumnMapping">put_column_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resetColumnMapping">reset_column_mapping</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_mapping` <a name="put_column_mapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.putColumnMapping"></a>

```python
def put_column_mapping(
  value: IResolvable | typing.List[CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.putColumnMapping.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>]

---

##### `reset_column_mapping` <a name="reset_column_mapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resetColumnMapping"></a>

```python
def reset_column_mapping() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping">column_mapping</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMappingInput">column_mapping_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_mapping`<sup>Required</sup> <a name="column_mapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping"></a>

```python
column_mapping: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a>

---

##### `column_mapping_input`<sup>Optional</sup> <a name="column_mapping_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMappingInput"></a>

```python
column_mapping_input: IResolvable | typing.List[CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.putColumnClassification">put_column_classification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetColumnClassification">reset_column_classification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetEpsilon">reset_epsilon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetMaxMembershipInferenceAttackScore">reset_max_membership_inference_attack_score</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_classification` <a name="put_column_classification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.putColumnClassification"></a>

```python
def put_column_classification(
  column_mapping: IResolvable | typing.List[CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping] = None
) -> None
```

###### `column_mapping`<sup>Optional</sup> <a name="column_mapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.putColumnClassification.parameter.columnMapping"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_mapping CleanroomsAnalysisTemplate#column_mapping}.

---

##### `reset_column_classification` <a name="reset_column_classification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetColumnClassification"></a>

```python
def reset_column_classification() -> None
```

##### `reset_epsilon` <a name="reset_epsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetEpsilon"></a>

```python
def reset_epsilon() -> None
```

##### `reset_max_membership_inference_attack_score` <a name="reset_max_membership_inference_attack_score" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetMaxMembershipInferenceAttackScore"></a>

```python
def reset_max_membership_inference_attack_score() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification">column_classification</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassificationInput">column_classification_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilonInput">epsilon_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScoreInput">max_membership_inference_attack_score_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon">epsilon</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore">max_membership_inference_attack_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_classification`<sup>Required</sup> <a name="column_classification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification"></a>

```python
column_classification: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a>

---

##### `column_classification_input`<sup>Optional</sup> <a name="column_classification_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassificationInput"></a>

```python
column_classification_input: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

---

##### `epsilon_input`<sup>Optional</sup> <a name="epsilon_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilonInput"></a>

```python
epsilon_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_membership_inference_attack_score_input`<sup>Optional</sup> <a name="max_membership_inference_attack_score_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScoreInput"></a>

```python
max_membership_inference_attack_score_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon"></a>

```python
epsilon: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_membership_inference_attack_score`<sup>Required</sup> <a name="max_membership_inference_attack_score" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore"></a>

```python
max_membership_inference_attack_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

---


### CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters">put_ml_synthetic_data_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resetMlSyntheticDataParameters">reset_ml_synthetic_data_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ml_synthetic_data_parameters` <a name="put_ml_synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters"></a>

```python
def put_ml_synthetic_data_parameters(
  column_classification: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification = None,
  epsilon: typing.Union[int, float] = None,
  max_membership_inference_attack_score: typing.Union[int, float] = None
) -> None
```

###### `column_classification`<sup>Optional</sup> <a name="column_classification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters.parameter.columnClassification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_classification CleanroomsAnalysisTemplate#column_classification}.

---

###### `epsilon`<sup>Optional</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters.parameter.epsilon"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#epsilon CleanroomsAnalysisTemplate#epsilon}.

---

###### `max_membership_inference_attack_score`<sup>Optional</sup> <a name="max_membership_inference_attack_score" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters.parameter.maxMembershipInferenceAttackScore"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#max_membership_inference_attack_score CleanroomsAnalysisTemplate#max_membership_inference_attack_score}.

---

##### `reset_ml_synthetic_data_parameters` <a name="reset_ml_synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resetMlSyntheticDataParameters"></a>

```python
def reset_ml_synthetic_data_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters">ml_synthetic_data_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParametersInput">ml_synthetic_data_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ml_synthetic_data_parameters`<sup>Required</sup> <a name="ml_synthetic_data_parameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters"></a>

```python
ml_synthetic_data_parameters: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a>

---

##### `ml_synthetic_data_parameters_input`<sup>Optional</sup> <a name="ml_synthetic_data_parameters_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParametersInput"></a>

```python
ml_synthetic_data_parameters_input: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

---


### CleanroomsAnalysisTemplateTagsList <a name="CleanroomsAnalysisTemplateTagsList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsAnalysisTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsAnalysisTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>]

---


### CleanroomsAnalysisTemplateTagsOutputReference <a name="CleanroomsAnalysisTemplateTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_analysis_template

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsAnalysisTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>

---



