# `qbusinessDataSource` Submodule <a name="`qbusinessDataSource` Submodule" id="@cdktn/provider-awscc.qbusinessDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessDataSource <a name="QbusinessDataSource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source awscc_qbusiness_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSource(
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
  configuration: str,
  display_name: str,
  index_id: str,
  description: str = None,
  document_enrichment_configuration: QbusinessDataSourceDocumentEnrichmentConfiguration = None,
  media_extraction_configuration: QbusinessDataSourceMediaExtractionConfiguration = None,
  role_arn: str = None,
  sync_schedule: str = None,
  tags: IResolvable | typing.List[QbusinessDataSourceTags] = None,
  vpc_configuration: QbusinessDataSourceVpcConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.configuration">configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.documentEnrichmentConfiguration">document_enrichment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.mediaExtractionConfiguration">media_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.syncSchedule">sync_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.configuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}.

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.indexId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}.

---

##### `document_enrichment_configuration`<sup>Optional</sup> <a name="document_enrichment_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.documentEnrichmentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}.

---

##### `media_extraction_configuration`<sup>Optional</sup> <a name="media_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.mediaExtractionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `sync_schedule`<sup>Optional</sup> <a name="sync_schedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.syncSchedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}.

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration">put_document_enrichment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration">put_media_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDocumentEnrichmentConfiguration">reset_document_enrichment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetMediaExtractionConfiguration">reset_media_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetSyncSchedule">reset_sync_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_document_enrichment_configuration` <a name="put_document_enrichment_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration"></a>

```python
def put_document_enrichment_configuration(
  inline_configurations: IResolvable | typing.List[QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations] = None,
  post_extraction_hook_configuration: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration = None,
  pre_extraction_hook_configuration: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration = None
) -> None
```

###### `inline_configurations`<sup>Optional</sup> <a name="inline_configurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration.parameter.inlineConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#inline_configurations QbusinessDataSource#inline_configurations}.

---

###### `post_extraction_hook_configuration`<sup>Optional</sup> <a name="post_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration.parameter.postExtractionHookConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#post_extraction_hook_configuration QbusinessDataSource#post_extraction_hook_configuration}.

---

###### `pre_extraction_hook_configuration`<sup>Optional</sup> <a name="pre_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putDocumentEnrichmentConfiguration.parameter.preExtractionHookConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#pre_extraction_hook_configuration QbusinessDataSource#pre_extraction_hook_configuration}.

---

##### `put_media_extraction_configuration` <a name="put_media_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration"></a>

```python
def put_media_extraction_configuration(
  audio_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration = None,
  image_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration = None,
  video_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration = None
) -> None
```

###### `audio_extraction_configuration`<sup>Optional</sup> <a name="audio_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration.parameter.audioExtractionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_configuration QbusinessDataSource#audio_extraction_configuration}.

---

###### `image_extraction_configuration`<sup>Optional</sup> <a name="image_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration.parameter.imageExtractionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_configuration QbusinessDataSource#image_extraction_configuration}.

---

###### `video_extraction_configuration`<sup>Optional</sup> <a name="video_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putMediaExtractionConfiguration.parameter.videoExtractionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_configuration QbusinessDataSource#video_extraction_configuration}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QbusinessDataSourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>]

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#security_group_ids QbusinessDataSource#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.putVpcConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#subnet_ids QbusinessDataSource#subnet_ids}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_document_enrichment_configuration` <a name="reset_document_enrichment_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetDocumentEnrichmentConfiguration"></a>

```python
def reset_document_enrichment_configuration() -> None
```

##### `reset_media_extraction_configuration` <a name="reset_media_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetMediaExtractionConfiguration"></a>

```python
def reset_media_extraction_configuration() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_sync_schedule` <a name="reset_sync_schedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetSyncSchedule"></a>

```python
def reset_sync_schedule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QbusinessDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isConstruct"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformResource"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QbusinessDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QbusinessDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QbusinessDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceArn">data_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfiguration">document_enrichment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfiguration">media_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList">QbusinessDataSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference">QbusinessDataSourceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configurationInput">configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfigurationInput">document_enrichment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexIdInput">index_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfigurationInput">media_extraction_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncScheduleInput">sync_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncSchedule">sync_schedule</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data_source_arn`<sup>Required</sup> <a name="data_source_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceArn"></a>

```python
data_source_arn: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `document_enrichment_configuration`<sup>Required</sup> <a name="document_enrichment_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfiguration"></a>

```python
document_enrichment_configuration: QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `media_extraction_configuration`<sup>Required</sup> <a name="media_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfiguration"></a>

```python
media_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tags"></a>

```python
tags: QbusinessDataSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList">QbusinessDataSourceTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfiguration"></a>

```python
vpc_configuration: QbusinessDataSourceVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference">QbusinessDataSourceVpcConfigurationOutputReference</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configurationInput"></a>

```python
configuration_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `document_enrichment_configuration_input`<sup>Optional</sup> <a name="document_enrichment_configuration_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.documentEnrichmentConfigurationInput"></a>

```python
document_enrichment_configuration_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

---

##### `index_id_input`<sup>Optional</sup> <a name="index_id_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexIdInput"></a>

```python
index_id_input: str
```

- *Type:* str

---

##### `media_extraction_configuration_input`<sup>Optional</sup> <a name="media_extraction_configuration_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.mediaExtractionConfigurationInput"></a>

```python
media_extraction_configuration_input: IResolvable | QbusinessDataSourceMediaExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `sync_schedule_input`<sup>Optional</sup> <a name="sync_schedule_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncScheduleInput"></a>

```python
sync_schedule_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QbusinessDataSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>]

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IResolvable | QbusinessDataSourceVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `sync_schedule`<sup>Required</sup> <a name="sync_schedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.syncSchedule"></a>

```python
sync_schedule: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessDataSourceConfig <a name="QbusinessDataSourceConfig" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  configuration: str,
  display_name: str,
  index_id: str,
  description: str = None,
  document_enrichment_configuration: QbusinessDataSourceDocumentEnrichmentConfiguration = None,
  media_extraction_configuration: QbusinessDataSourceMediaExtractionConfiguration = None,
  role_arn: str = None,
  sync_schedule: str = None,
  tags: IResolvable | typing.List[QbusinessDataSourceTags] = None,
  vpc_configuration: QbusinessDataSourceVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.configuration">configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.documentEnrichmentConfiguration">document_enrichment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.mediaExtractionConfiguration">media_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.syncSchedule">sync_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#application_id QbusinessDataSource#application_id}.

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#configuration QbusinessDataSource#configuration}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#display_name QbusinessDataSource#display_name}.

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#index_id QbusinessDataSource#index_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#description QbusinessDataSource#description}.

---

##### `document_enrichment_configuration`<sup>Optional</sup> <a name="document_enrichment_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.documentEnrichmentConfiguration"></a>

```python
document_enrichment_configuration: QbusinessDataSourceDocumentEnrichmentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_enrichment_configuration QbusinessDataSource#document_enrichment_configuration}.

---

##### `media_extraction_configuration`<sup>Optional</sup> <a name="media_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.mediaExtractionConfiguration"></a>

```python
media_extraction_configuration: QbusinessDataSourceMediaExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#media_extraction_configuration QbusinessDataSource#media_extraction_configuration}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `sync_schedule`<sup>Optional</sup> <a name="sync_schedule" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.syncSchedule"></a>

```python
sync_schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#sync_schedule QbusinessDataSource#sync_schedule}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QbusinessDataSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#tags QbusinessDataSource#tags}.

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceConfig.property.vpcConfiguration"></a>

```python
vpc_configuration: QbusinessDataSourceVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#vpc_configuration QbusinessDataSource#vpc_configuration}.

---

### QbusinessDataSourceDocumentEnrichmentConfiguration <a name="QbusinessDataSourceDocumentEnrichmentConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration(
  inline_configurations: IResolvable | typing.List[QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations] = None,
  post_extraction_hook_configuration: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration = None,
  pre_extraction_hook_configuration: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.inlineConfigurations">inline_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#inline_configurations QbusinessDataSource#inline_configurations}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration">post_extraction_hook_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#post_extraction_hook_configuration QbusinessDataSource#post_extraction_hook_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration">pre_extraction_hook_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#pre_extraction_hook_configuration QbusinessDataSource#pre_extraction_hook_configuration}. |

---

##### `inline_configurations`<sup>Optional</sup> <a name="inline_configurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.inlineConfigurations"></a>

```python
inline_configurations: IResolvable | typing.List[QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#inline_configurations QbusinessDataSource#inline_configurations}.

---

##### `post_extraction_hook_configuration`<sup>Optional</sup> <a name="post_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration"></a>

```python
post_extraction_hook_configuration: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#post_extraction_hook_configuration QbusinessDataSource#post_extraction_hook_configuration}.

---

##### `pre_extraction_hook_configuration`<sup>Optional</sup> <a name="pre_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration"></a>

```python
pre_extraction_hook_configuration: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#pre_extraction_hook_configuration QbusinessDataSource#pre_extraction_hook_configuration}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations(
  condition: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition = None,
  document_content_operator: str = None,
  target: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#condition QbusinessDataSource#condition}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentOperator">document_content_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_content_operator QbusinessDataSource#document_content_operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#target QbusinessDataSource#target}. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.condition"></a>

```python
condition: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#condition QbusinessDataSource#condition}.

---

##### `document_content_operator`<sup>Optional</sup> <a name="document_content_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentOperator"></a>

```python
document_content_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#document_content_operator QbusinessDataSource#document_content_operator}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations.property.target"></a>

```python
target: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#target QbusinessDataSource#target}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition(
  key: str = None,
  operator: str = None,
  value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.value"></a>

```python
value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.dateValue">date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget(
  attribute_value_operator: str = None,
  key: str = None,
  value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.attributeValueOperator">attribute_value_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#attribute_value_operator QbusinessDataSource#attribute_value_operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `attribute_value_operator`<sup>Optional</sup> <a name="attribute_value_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.attributeValueOperator"></a>

```python
attribute_value_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#attribute_value_operator QbusinessDataSource#attribute_value_operator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.value"></a>

```python
value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.dateValue">date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration(
  invocation_condition: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition = None,
  lambda_arn: str = None,
  role_arn: str = None,
  s3_bucket_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition">invocation_condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}. |

---

##### `invocation_condition`<sup>Optional</sup> <a name="invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition"></a>

```python
invocation_condition: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}.

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition(
  key: str = None,
  operator: str = None,
  value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.value"></a>

```python
value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.dateValue">date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration(
  invocation_condition: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition = None,
  lambda_arn: str = None,
  role_arn: str = None,
  s3_bucket_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition">invocation_condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}. |

---

##### `invocation_condition`<sup>Optional</sup> <a name="invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition"></a>

```python
invocation_condition: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}.

---

##### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

##### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition(
  key: str = None,
  operator: str = None,
  value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.value"></a>

```python
value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.dateValue">date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}. |

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

##### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

### QbusinessDataSourceMediaExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration(
  audio_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration = None,
  image_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration = None,
  video_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.audioExtractionConfiguration">audio_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_configuration QbusinessDataSource#audio_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.imageExtractionConfiguration">image_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_configuration QbusinessDataSource#image_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.videoExtractionConfiguration">video_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_configuration QbusinessDataSource#video_extraction_configuration}. |

---

##### `audio_extraction_configuration`<sup>Optional</sup> <a name="audio_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.audioExtractionConfiguration"></a>

```python
audio_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_configuration QbusinessDataSource#audio_extraction_configuration}.

---

##### `image_extraction_configuration`<sup>Optional</sup> <a name="image_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.imageExtractionConfiguration"></a>

```python
image_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_configuration QbusinessDataSource#image_extraction_configuration}.

---

##### `video_extraction_configuration`<sup>Optional</sup> <a name="video_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration.property.videoExtractionConfiguration"></a>

```python
video_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_configuration QbusinessDataSource#video_extraction_configuration}.

---

### QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration(
  audio_extraction_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus">audio_extraction_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_status QbusinessDataSource#audio_extraction_status}. |

---

##### `audio_extraction_status`<sup>Optional</sup> <a name="audio_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus"></a>

```python
audio_extraction_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_status QbusinessDataSource#audio_extraction_status}.

---

### QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration(
  image_extraction_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus">image_extraction_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_status QbusinessDataSource#image_extraction_status}. |

---

##### `image_extraction_status`<sup>Optional</sup> <a name="image_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus"></a>

```python
image_extraction_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_status QbusinessDataSource#image_extraction_status}.

---

### QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration <a name="QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration(
  video_extraction_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus">video_extraction_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_status QbusinessDataSource#video_extraction_status}. |

---

##### `video_extraction_status`<sup>Optional</sup> <a name="video_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus"></a>

```python
video_extraction_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_status QbusinessDataSource#video_extraction_status}.

---

### QbusinessDataSourceTags <a name="QbusinessDataSourceTags" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

### QbusinessDataSourceVpcConfiguration <a name="QbusinessDataSourceVpcConfiguration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceVpcConfiguration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#security_group_ids QbusinessDataSource#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#subnet_ids QbusinessDataSource#subnet_ids}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#security_group_ids QbusinessDataSource#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#subnet_ids QbusinessDataSource#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue"></a>

```python
def put_value(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
) -> None
```

###### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue.parameter.dateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

###### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue.parameter.longValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue.parameter.stringListValue"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.value"></a>

```python
value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetLongValue">reset_long_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_value` <a name="reset_date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_long_value` <a name="reset_long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetLongValue"></a>

```python
def reset_long_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValueInput">date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValueInput">long_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue">date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValueInput"></a>

```python
date_value_input: str
```

- *Type:* str

---

##### `long_value_input`<sup>Optional</sup> <a name="long_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValueInput"></a>

```python
long_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

---

##### `long_value`<sup>Required</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>]

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentOperator">reset_document_content_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition"></a>

```python
def put_condition(
  key: str = None,
  operator: str = None,
  value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

##### `put_target` <a name="put_target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget"></a>

```python
def put_target(
  attribute_value_operator: str = None,
  key: str = None,
  value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue = None
) -> None
```

###### `attribute_value_operator`<sup>Optional</sup> <a name="attribute_value_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget.parameter.attributeValueOperator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#attribute_value_operator QbusinessDataSource#attribute_value_operator}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_document_content_operator` <a name="reset_document_content_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentOperator"></a>

```python
def reset_document_content_operator() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput">condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperatorInput">document_content_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput">target_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator">document_content_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition"></a>

```python
condition: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target"></a>

```python
target: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput"></a>

```python
condition_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---

##### `document_content_operator_input`<sup>Optional</sup> <a name="document_content_operator_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperatorInput"></a>

```python
document_content_operator_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput"></a>

```python
target_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---

##### `document_content_operator`<sup>Required</sup> <a name="document_content_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentOperator"></a>

```python
document_content_operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetAttributeValueOperator">reset_attribute_value_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue"></a>

```python
def put_value(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
) -> None
```

###### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue.parameter.dateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

###### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue.parameter.longValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue.parameter.stringListValue"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

##### `reset_attribute_value_operator` <a name="reset_attribute_value_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetAttributeValueOperator"></a>

```python
def reset_attribute_value_operator() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperatorInput">attribute_value_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator">attribute_value_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.value"></a>

```python
value: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference</a>

---

##### `attribute_value_operator_input`<sup>Optional</sup> <a name="attribute_value_operator_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperatorInput"></a>

```python
attribute_value_operator_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

---

##### `attribute_value_operator`<sup>Required</sup> <a name="attribute_value_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.attributeValueOperator"></a>

```python
attribute_value_operator: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetLongValue">reset_long_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_value` <a name="reset_date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_long_value` <a name="reset_long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetLongValue"></a>

```python
def reset_long_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValueInput">date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValueInput">long_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue">date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValueInput"></a>

```python
date_value_input: str
```

- *Type:* str

---

##### `long_value_input`<sup>Optional</sup> <a name="long_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValueInput"></a>

```python
long_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

---

##### `long_value`<sup>Required</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsTargetValue</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations">put_inline_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration">put_post_extraction_hook_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration">put_pre_extraction_hook_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations">reset_inline_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration">reset_post_extraction_hook_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration">reset_pre_extraction_hook_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_inline_configurations` <a name="put_inline_configurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations"></a>

```python
def put_inline_configurations(
  value: IResolvable | typing.List[QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>]

---

##### `put_post_extraction_hook_configuration` <a name="put_post_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration"></a>

```python
def put_post_extraction_hook_configuration(
  invocation_condition: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition = None,
  lambda_arn: str = None,
  role_arn: str = None,
  s3_bucket_name: str = None
) -> None
```

###### `invocation_condition`<sup>Optional</sup> <a name="invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.invocationCondition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}.

---

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}.

---

##### `put_pre_extraction_hook_configuration` <a name="put_pre_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration"></a>

```python
def put_pre_extraction_hook_configuration(
  invocation_condition: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition = None,
  lambda_arn: str = None,
  role_arn: str = None,
  s3_bucket_name: str = None
) -> None
```

###### `invocation_condition`<sup>Optional</sup> <a name="invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.invocationCondition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#invocation_condition QbusinessDataSource#invocation_condition}.

---

###### `lambda_arn`<sup>Optional</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#lambda_arn QbusinessDataSource#lambda_arn}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#role_arn QbusinessDataSource#role_arn}.

---

###### `s3_bucket_name`<sup>Optional</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#s3_bucket_name QbusinessDataSource#s3_bucket_name}.

---

##### `reset_inline_configurations` <a name="reset_inline_configurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations"></a>

```python
def reset_inline_configurations() -> None
```

##### `reset_post_extraction_hook_configuration` <a name="reset_post_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration"></a>

```python
def reset_post_extraction_hook_configuration() -> None
```

##### `reset_pre_extraction_hook_configuration` <a name="reset_pre_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration"></a>

```python
def reset_pre_extraction_hook_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations">inline_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration">post_extraction_hook_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration">pre_extraction_hook_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput">inline_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput">post_extraction_hook_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput">pre_extraction_hook_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline_configurations`<sup>Required</sup> <a name="inline_configurations" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations"></a>

```python
inline_configurations: QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurationsList</a>

---

##### `post_extraction_hook_configuration`<sup>Required</sup> <a name="post_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration"></a>

```python
post_extraction_hook_configuration: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a>

---

##### `pre_extraction_hook_configuration`<sup>Required</sup> <a name="pre_extraction_hook_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration"></a>

```python
pre_extraction_hook_configuration: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a>

---

##### `inline_configurations_input`<sup>Optional</sup> <a name="inline_configurations_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput"></a>

```python
inline_configurations_input: IResolvable | typing.List[QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations">QbusinessDataSourceDocumentEnrichmentConfigurationInlineConfigurations</a>]

---

##### `post_extraction_hook_configuration_input`<sup>Optional</sup> <a name="post_extraction_hook_configuration_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput"></a>

```python
post_extraction_hook_configuration_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---

##### `pre_extraction_hook_configuration_input`<sup>Optional</sup> <a name="pre_extraction_hook_configuration_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput"></a>

```python
pre_extraction_hook_configuration_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfiguration">QbusinessDataSourceDocumentEnrichmentConfiguration</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue"></a>

```python
def put_value(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
) -> None
```

###### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.dateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

###### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.longValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.stringListValue"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```python
value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue">reset_long_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_value` <a name="reset_date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_long_value` <a name="reset_long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue"></a>

```python
def reset_long_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput">date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput">long_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput"></a>

```python
date_value_input: str
```

- *Type:* str

---

##### `long_value_input`<sup>Optional</sup> <a name="long_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput"></a>

```python
long_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

---

##### `long_value`<sup>Required</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition">put_invocation_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition">reset_invocation_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_invocation_condition` <a name="put_invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```python
def put_invocation_condition(
  key: str = None,
  operator: str = None,
  value: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

##### `reset_invocation_condition` <a name="reset_invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```python
def reset_invocation_condition() -> None
```

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition">invocation_condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput">invocation_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invocation_condition`<sup>Required</sup> <a name="invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```python
invocation_condition: QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `invocation_condition_input`<sup>Optional</sup> <a name="invocation_condition_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```python
invocation_condition_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue"></a>

```python
def put_value(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
) -> None
```

###### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.dateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#date_value QbusinessDataSource#date_value}.

---

###### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.longValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#long_value QbusinessDataSource#long_value}.

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.stringListValue"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_list_value QbusinessDataSource#string_list_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#string_value QbusinessDataSource#string_value}.

---

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput">value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.value"></a>

```python
value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference</a>

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.valueInput"></a>

```python
value_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue">reset_long_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_value` <a name="reset_date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_long_value` <a name="reset_long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetLongValue"></a>

```python
def reset_long_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput">date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput">long_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue">date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValueInput"></a>

```python
date_value_input: str
```

- *Type:* str

---

##### `long_value_input`<sup>Optional</sup> <a name="long_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValueInput"></a>

```python
long_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

---

##### `long_value`<sup>Required</sup> <a name="long_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

---


### QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference <a name="QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition">put_invocation_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition">reset_invocation_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetLambdaArn">reset_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetS3BucketName">reset_s3_bucket_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_invocation_condition` <a name="put_invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```python
def put_invocation_condition(
  key: str = None,
  operator: str = None,
  value: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#key QbusinessDataSource#key}.

---

###### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#operator QbusinessDataSource#operator}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#value QbusinessDataSource#value}.

---

##### `reset_invocation_condition` <a name="reset_invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```python
def reset_invocation_condition() -> None
```

##### `reset_lambda_arn` <a name="reset_lambda_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetLambdaArn"></a>

```python
def reset_lambda_arn() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_s3_bucket_name` <a name="reset_s3_bucket_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetS3BucketName"></a>

```python
def reset_s3_bucket_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition">invocation_condition</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput">invocation_condition_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invocation_condition`<sup>Required</sup> <a name="invocation_condition" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```python
invocation_condition: QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `invocation_condition_input`<sup>Optional</sup> <a name="invocation_condition_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```python
invocation_condition_input: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration">QbusinessDataSourceDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---


### QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus">reset_audio_extraction_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audio_extraction_status` <a name="reset_audio_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus"></a>

```python
def reset_audio_extraction_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput">audio_extraction_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">audio_extraction_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_extraction_status_input`<sup>Optional</sup> <a name="audio_extraction_status_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput"></a>

```python
audio_extraction_status_input: str
```

- *Type:* str

---

##### `audio_extraction_status`<sup>Required</sup> <a name="audio_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```python
audio_extraction_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

---


### QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus">reset_image_extraction_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_extraction_status` <a name="reset_image_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus"></a>

```python
def reset_image_extraction_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput">image_extraction_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">image_extraction_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_extraction_status_input`<sup>Optional</sup> <a name="image_extraction_status_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput"></a>

```python
image_extraction_status_input: str
```

- *Type:* str

---

##### `image_extraction_status`<sup>Required</sup> <a name="image_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```python
image_extraction_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

---


### QbusinessDataSourceMediaExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration">put_audio_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration">put_image_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration">put_video_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration">reset_audio_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration">reset_image_extraction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration">reset_video_extraction_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_extraction_configuration` <a name="put_audio_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration"></a>

```python
def put_audio_extraction_configuration(
  audio_extraction_status: str = None
) -> None
```

###### `audio_extraction_status`<sup>Optional</sup> <a name="audio_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration.parameter.audioExtractionStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#audio_extraction_status QbusinessDataSource#audio_extraction_status}.

---

##### `put_image_extraction_configuration` <a name="put_image_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration"></a>

```python
def put_image_extraction_configuration(
  image_extraction_status: str = None
) -> None
```

###### `image_extraction_status`<sup>Optional</sup> <a name="image_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration.parameter.imageExtractionStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#image_extraction_status QbusinessDataSource#image_extraction_status}.

---

##### `put_video_extraction_configuration` <a name="put_video_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration"></a>

```python
def put_video_extraction_configuration(
  video_extraction_status: str = None
) -> None
```

###### `video_extraction_status`<sup>Optional</sup> <a name="video_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration.parameter.videoExtractionStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_data_source#video_extraction_status QbusinessDataSource#video_extraction_status}.

---

##### `reset_audio_extraction_configuration` <a name="reset_audio_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration"></a>

```python
def reset_audio_extraction_configuration() -> None
```

##### `reset_image_extraction_configuration` <a name="reset_image_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration"></a>

```python
def reset_image_extraction_configuration() -> None
```

##### `reset_video_extraction_configuration` <a name="reset_video_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration"></a>

```python
def reset_video_extraction_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">audio_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">image_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">video_extraction_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput">audio_extraction_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput">image_extraction_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput">video_extraction_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_extraction_configuration`<sup>Required</sup> <a name="audio_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```python
audio_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `image_extraction_configuration`<sup>Required</sup> <a name="image_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```python
image_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `video_extraction_configuration`<sup>Required</sup> <a name="video_extraction_configuration" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```python
video_extraction_configuration: QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `audio_extraction_configuration_input`<sup>Optional</sup> <a name="audio_extraction_configuration_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput"></a>

```python
audio_extraction_configuration_input: IResolvable | QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationAudioExtractionConfiguration</a>

---

##### `image_extraction_configuration_input`<sup>Optional</sup> <a name="image_extraction_configuration_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput"></a>

```python
image_extraction_configuration_input: IResolvable | QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationImageExtractionConfiguration</a>

---

##### `video_extraction_configuration_input`<sup>Optional</sup> <a name="video_extraction_configuration_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput"></a>

```python
video_extraction_configuration_input: IResolvable | QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceMediaExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfiguration">QbusinessDataSourceMediaExtractionConfiguration</a>

---


### QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus">reset_video_extraction_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_video_extraction_status` <a name="reset_video_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus"></a>

```python
def reset_video_extraction_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput">video_extraction_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">video_extraction_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `video_extraction_status_input`<sup>Optional</sup> <a name="video_extraction_status_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput"></a>

```python
video_extraction_status_input: str
```

- *Type:* str

---

##### `video_extraction_status`<sup>Required</sup> <a name="video_extraction_status" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```python
video_extraction_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration">QbusinessDataSourceMediaExtractionConfigurationVideoExtractionConfiguration</a>

---


### QbusinessDataSourceTagsList <a name="QbusinessDataSourceTagsList" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QbusinessDataSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QbusinessDataSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>]

---


### QbusinessDataSourceTagsOutputReference <a name="QbusinessDataSourceTagsOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceTags">QbusinessDataSourceTags</a>

---


### QbusinessDataSourceVpcConfigurationOutputReference <a name="QbusinessDataSourceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_data_source

qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessDataSourceVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessDataSource.QbusinessDataSourceVpcConfiguration">QbusinessDataSourceVpcConfiguration</a>

---



