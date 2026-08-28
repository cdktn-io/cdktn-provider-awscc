# `datazoneDataSource` Submodule <a name="`datazoneDataSource` Submodule" id="@cdktn/provider-awscc.datazoneDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneDataSource <a name="DatazoneDataSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source awscc_datazone_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  name: str,
  project_identifier: str,
  type: str,
  asset_forms_input: IResolvable | typing.List[DatazoneDataSourceAssetFormsInput] = None,
  configuration: DatazoneDataSourceConfiguration = None,
  connection_identifier: str = None,
  description: str = None,
  enable_setting: str = None,
  environment_identifier: str = None,
  publish_on_import: bool | IResolvable = None,
  recommendation: DatazoneDataSourceRecommendation = None,
  schedule: DatazoneDataSourceSchedule = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone domain where the data source is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.projectIdentifier">project_identifier</a></code> | <code>str</code> | The identifier of the Amazon DataZone project in which you want to add the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.assetFormsInput">asset_forms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>]</code> | The metadata forms that are to be attached to the assets that this data source works with. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.connectionIdentifier">connection_identifier</a></code> | <code>str</code> | The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.enableSetting">enable_setting</a></code> | <code>str</code> | Specifies whether the data source is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The unique identifier of the Amazon DataZone environment to which the data source publishes assets. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.publishOnImport">publish_on_import</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.recommendation">recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | Specifies whether the business name generation is to be enabled for this data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | The schedule of the data source runs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

The ID of the Amazon DataZone domain where the data source is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#domain_identifier DatazoneDataSource#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.name"></a>

- *Type:* str

The name of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#name DatazoneDataSource#name}

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.projectIdentifier"></a>

- *Type:* str

The identifier of the Amazon DataZone project in which you want to add the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#project_identifier DatazoneDataSource#project_identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.type"></a>

- *Type:* str

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

##### `asset_forms_input`<sup>Optional</sup> <a name="asset_forms_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.assetFormsInput"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>]

The metadata forms that are to be attached to the assets that this data source works with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#asset_forms_input DatazoneDataSource#asset_forms_input}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#configuration DatazoneDataSource#configuration}

---

##### `connection_identifier`<sup>Optional</sup> <a name="connection_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.connectionIdentifier"></a>

- *Type:* str

The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#connection_identifier DatazoneDataSource#connection_identifier}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.description"></a>

- *Type:* str

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#description DatazoneDataSource#description}

---

##### `enable_setting`<sup>Optional</sup> <a name="enable_setting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.enableSetting"></a>

- *Type:* str

Specifies whether the data source is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#enable_setting DatazoneDataSource#enable_setting}

---

##### `environment_identifier`<sup>Optional</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.environmentIdentifier"></a>

- *Type:* str

The unique identifier of the Amazon DataZone environment to which the data source publishes assets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#environment_identifier DatazoneDataSource#environment_identifier}

---

##### `publish_on_import`<sup>Optional</sup> <a name="publish_on_import" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.publishOnImport"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#publish_on_import DatazoneDataSource#publish_on_import}

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.recommendation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

Specifies whether the business name generation is to be enabled for this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#recommendation DatazoneDataSource#recommendation}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput">put_asset_forms_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation">put_recommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetAssetFormsInput">reset_asset_forms_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConnectionIdentifier">reset_connection_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnableSetting">reset_enable_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnvironmentIdentifier">reset_environment_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetPublishOnImport">reset_publish_on_import</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetRecommendation">reset_recommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_asset_forms_input` <a name="put_asset_forms_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput"></a>

```python
def put_asset_forms_input(
  value: IResolvable | typing.List[DatazoneDataSourceAssetFormsInput]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>]

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration"></a>

```python
def put_configuration(
  glue_run_configuration: DatazoneDataSourceConfigurationGlueRunConfiguration = None,
  redshift_run_configuration: DatazoneDataSourceConfigurationRedshiftRunConfiguration = None,
  sage_maker_run_configuration: DatazoneDataSourceConfigurationSageMakerRunConfiguration = None
) -> None
```

###### `glue_run_configuration`<sup>Optional</sup> <a name="glue_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration.parameter.glueRunConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#glue_run_configuration DatazoneDataSource#glue_run_configuration}.

---

###### `redshift_run_configuration`<sup>Optional</sup> <a name="redshift_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration.parameter.redshiftRunConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

The configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_run_configuration DatazoneDataSource#redshift_run_configuration}

---

###### `sage_maker_run_configuration`<sup>Optional</sup> <a name="sage_maker_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration.parameter.sageMakerRunConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

The configuration details of the Amazon SageMaker data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#sage_maker_run_configuration DatazoneDataSource#sage_maker_run_configuration}

---

##### `put_recommendation` <a name="put_recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation"></a>

```python
def put_recommendation(
  enable_business_name_generation: bool | IResolvable = None
) -> None
```

###### `enable_business_name_generation`<sup>Optional</sup> <a name="enable_business_name_generation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation.parameter.enableBusinessNameGeneration"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#enable_business_name_generation DatazoneDataSource#enable_business_name_generation}

---

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule"></a>

```python
def put_schedule(
  schedule: str = None,
  timezone: str = None
) -> None
```

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule.parameter.schedule"></a>

- *Type:* str

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule.parameter.timezone"></a>

- *Type:* str

The timezone of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#timezone DatazoneDataSource#timezone}

---

##### `reset_asset_forms_input` <a name="reset_asset_forms_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetAssetFormsInput"></a>

```python
def reset_asset_forms_input() -> None
```

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_connection_identifier` <a name="reset_connection_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConnectionIdentifier"></a>

```python
def reset_connection_identifier() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_setting` <a name="reset_enable_setting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnableSetting"></a>

```python
def reset_enable_setting() -> None
```

##### `reset_environment_identifier` <a name="reset_environment_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnvironmentIdentifier"></a>

```python
def reset_environment_identifier() -> None
```

##### `reset_publish_on_import` <a name="reset_publish_on_import" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetPublishOnImport"></a>

```python
def reset_publish_on_import() -> None
```

##### `reset_recommendation` <a name="reset_recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetRecommendation"></a>

```python
def reset_recommendation() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetSchedule"></a>

```python
def reset_schedule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatazoneDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatazoneDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInput">asset_forms_input</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList">DatazoneDataSourceAssetFormsInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference">DatazoneDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAssetCount">last_run_asset_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAt">last_run_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunStatus">last_run_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendation">recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference">DatazoneDataSourceRecommendationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference">DatazoneDataSourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInputInput">asset_forms_input_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifierInput">connection_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSettingInput">enable_setting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifierInput">environment_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifierInput">project_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImportInput">publish_on_import_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendationInput">recommendation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifier">connection_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSetting">enable_setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImport">publish_on_import</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_forms_input`<sup>Required</sup> <a name="asset_forms_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInput"></a>

```python
asset_forms_input: DatazoneDataSourceAssetFormsInputList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList">DatazoneDataSourceAssetFormsInputList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configuration"></a>

```python
configuration: DatazoneDataSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference">DatazoneDataSourceConfigurationOutputReference</a>

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_run_asset_count`<sup>Required</sup> <a name="last_run_asset_count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAssetCount"></a>

```python
last_run_asset_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_run_at`<sup>Required</sup> <a name="last_run_at" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAt"></a>

```python
last_run_at: str
```

- *Type:* str

---

##### `last_run_status`<sup>Required</sup> <a name="last_run_status" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunStatus"></a>

```python
last_run_status: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendation"></a>

```python
recommendation: DatazoneDataSourceRecommendationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference">DatazoneDataSourceRecommendationOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.schedule"></a>

```python
schedule: DatazoneDataSourceScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference">DatazoneDataSourceScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `asset_forms_input_input`<sup>Optional</sup> <a name="asset_forms_input_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInputInput"></a>

```python
asset_forms_input_input: IResolvable | typing.List[DatazoneDataSourceAssetFormsInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>]

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configurationInput"></a>

```python
configuration_input: IResolvable | DatazoneDataSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

---

##### `connection_identifier_input`<sup>Optional</sup> <a name="connection_identifier_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifierInput"></a>

```python
connection_identifier_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `enable_setting_input`<sup>Optional</sup> <a name="enable_setting_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSettingInput"></a>

```python
enable_setting_input: str
```

- *Type:* str

---

##### `environment_identifier_input`<sup>Optional</sup> <a name="environment_identifier_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifierInput"></a>

```python
environment_identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_identifier_input`<sup>Optional</sup> <a name="project_identifier_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifierInput"></a>

```python
project_identifier_input: str
```

- *Type:* str

---

##### `publish_on_import_input`<sup>Optional</sup> <a name="publish_on_import_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImportInput"></a>

```python
publish_on_import_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `recommendation_input`<sup>Optional</sup> <a name="recommendation_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendationInput"></a>

```python
recommendation_input: IResolvable | DatazoneDataSourceRecommendation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.scheduleInput"></a>

```python
schedule_input: IResolvable | DatazoneDataSourceSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `connection_identifier`<sup>Required</sup> <a name="connection_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifier"></a>

```python
connection_identifier: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `enable_setting`<sup>Required</sup> <a name="enable_setting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSetting"></a>

```python
enable_setting: str
```

- *Type:* str

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

---

##### `publish_on_import`<sup>Required</sup> <a name="publish_on_import" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImport"></a>

```python
publish_on_import: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneDataSourceAssetFormsInput <a name="DatazoneDataSourceAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceAssetFormsInput(
  content: str = None,
  form_name: str = None,
  type_identifier: str = None,
  type_revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.content">content</a></code> | <code>str</code> | The content of the metadata form. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.formName">form_name</a></code> | <code>str</code> | The name of the metadata form. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeIdentifier">type_identifier</a></code> | <code>str</code> | The ID of the metadata form type. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeRevision">type_revision</a></code> | <code>str</code> | The revision of the metadata form type. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.content"></a>

```python
content: str
```

- *Type:* str

The content of the metadata form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#content DatazoneDataSource#content}

---

##### `form_name`<sup>Optional</sup> <a name="form_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.formName"></a>

```python
form_name: str
```

- *Type:* str

The name of the metadata form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#form_name DatazoneDataSource#form_name}

---

##### `type_identifier`<sup>Optional</sup> <a name="type_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeIdentifier"></a>

```python
type_identifier: str
```

- *Type:* str

The ID of the metadata form type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#type_identifier DatazoneDataSource#type_identifier}

---

##### `type_revision`<sup>Optional</sup> <a name="type_revision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeRevision"></a>

```python
type_revision: str
```

- *Type:* str

The revision of the metadata form type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#type_revision DatazoneDataSource#type_revision}

---

### DatazoneDataSourceConfig <a name="DatazoneDataSourceConfig" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  name: str,
  project_identifier: str,
  type: str,
  asset_forms_input: IResolvable | typing.List[DatazoneDataSourceAssetFormsInput] = None,
  configuration: DatazoneDataSourceConfiguration = None,
  connection_identifier: str = None,
  description: str = None,
  enable_setting: str = None,
  environment_identifier: str = None,
  publish_on_import: bool | IResolvable = None,
  recommendation: DatazoneDataSourceRecommendation = None,
  schedule: DatazoneDataSourceSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone domain where the data source is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.name">name</a></code> | <code>str</code> | The name of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | The identifier of the Amazon DataZone project in which you want to add the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.type">type</a></code> | <code>str</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.assetFormsInput">asset_forms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>]</code> | The metadata forms that are to be attached to the assets that this data source works with. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connectionIdentifier">connection_identifier</a></code> | <code>str</code> | The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.description">description</a></code> | <code>str</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.enableSetting">enable_setting</a></code> | <code>str</code> | Specifies whether the data source is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The unique identifier of the Amazon DataZone environment to which the data source publishes assets. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.publishOnImport">publish_on_import</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.recommendation">recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | Specifies whether the business name generation is to be enabled for this data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | The schedule of the data source runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

The ID of the Amazon DataZone domain where the data source is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#domain_identifier DatazoneDataSource#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#name DatazoneDataSource#name}

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

The identifier of the Amazon DataZone project in which you want to add the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#project_identifier DatazoneDataSource#project_identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

##### `asset_forms_input`<sup>Optional</sup> <a name="asset_forms_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.assetFormsInput"></a>

```python
asset_forms_input: IResolvable | typing.List[DatazoneDataSourceAssetFormsInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>]

The metadata forms that are to be attached to the assets that this data source works with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#asset_forms_input DatazoneDataSource#asset_forms_input}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.configuration"></a>

```python
configuration: DatazoneDataSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#configuration DatazoneDataSource#configuration}

---

##### `connection_identifier`<sup>Optional</sup> <a name="connection_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connectionIdentifier"></a>

```python
connection_identifier: str
```

- *Type:* str

The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#connection_identifier DatazoneDataSource#connection_identifier}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#description DatazoneDataSource#description}

---

##### `enable_setting`<sup>Optional</sup> <a name="enable_setting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.enableSetting"></a>

```python
enable_setting: str
```

- *Type:* str

Specifies whether the data source is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#enable_setting DatazoneDataSource#enable_setting}

---

##### `environment_identifier`<sup>Optional</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

The unique identifier of the Amazon DataZone environment to which the data source publishes assets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#environment_identifier DatazoneDataSource#environment_identifier}

---

##### `publish_on_import`<sup>Optional</sup> <a name="publish_on_import" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.publishOnImport"></a>

```python
publish_on_import: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#publish_on_import DatazoneDataSource#publish_on_import}

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.recommendation"></a>

```python
recommendation: DatazoneDataSourceRecommendation
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

Specifies whether the business name generation is to be enabled for this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#recommendation DatazoneDataSource#recommendation}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.schedule"></a>

```python
schedule: DatazoneDataSourceSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

### DatazoneDataSourceConfiguration <a name="DatazoneDataSourceConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfiguration(
  glue_run_configuration: DatazoneDataSourceConfigurationGlueRunConfiguration = None,
  redshift_run_configuration: DatazoneDataSourceConfigurationRedshiftRunConfiguration = None,
  sage_maker_run_configuration: DatazoneDataSourceConfigurationSageMakerRunConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.glueRunConfiguration">glue_run_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#glue_run_configuration DatazoneDataSource#glue_run_configuration}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.redshiftRunConfiguration">redshift_run_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | The configuration details of the Amazon Redshift data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.sageMakerRunConfiguration">sage_maker_run_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | The configuration details of the Amazon SageMaker data source. |

---

##### `glue_run_configuration`<sup>Optional</sup> <a name="glue_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.glueRunConfiguration"></a>

```python
glue_run_configuration: DatazoneDataSourceConfigurationGlueRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#glue_run_configuration DatazoneDataSource#glue_run_configuration}.

---

##### `redshift_run_configuration`<sup>Optional</sup> <a name="redshift_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.redshiftRunConfiguration"></a>

```python
redshift_run_configuration: DatazoneDataSourceConfigurationRedshiftRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

The configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_run_configuration DatazoneDataSource#redshift_run_configuration}

---

##### `sage_maker_run_configuration`<sup>Optional</sup> <a name="sage_maker_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.sageMakerRunConfiguration"></a>

```python
sage_maker_run_configuration: DatazoneDataSourceConfigurationSageMakerRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

The configuration details of the Amazon SageMaker data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#sage_maker_run_configuration DatazoneDataSource#sage_maker_run_configuration}

---

### DatazoneDataSourceConfigurationGlueRunConfiguration <a name="DatazoneDataSourceConfigurationGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration(
  auto_import_data_quality_result: bool | IResolvable = None,
  catalog_name: str = None,
  data_access_role: str = None,
  relational_filter_configurations: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.autoImportDataQualityResult">auto_import_data_quality_result</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to automatically import data quality metrics as part of the data source run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.catalogName">catalog_name</a></code> | <code>str</code> | The catalog name in the AWS Glue run configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.dataAccessRole">data_access_role</a></code> | <code>str</code> | The data access role included in the configuration details of the AWS Glue data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.relationalFilterConfigurations">relational_filter_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>]</code> | The relational filter configurations included in the configuration details of the AWS Glue data source. |

---

##### `auto_import_data_quality_result`<sup>Optional</sup> <a name="auto_import_data_quality_result" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.autoImportDataQualityResult"></a>

```python
auto_import_data_quality_result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to automatically import data quality metrics as part of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#auto_import_data_quality_result DatazoneDataSource#auto_import_data_quality_result}

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

The catalog name in the AWS Glue run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#catalog_name DatazoneDataSource#catalog_name}

---

##### `data_access_role`<sup>Optional</sup> <a name="data_access_role" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.dataAccessRole"></a>

```python
data_access_role: str
```

- *Type:* str

The data access role included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

##### `relational_filter_configurations`<sup>Optional</sup> <a name="relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.relationalFilterConfigurations"></a>

```python
relational_filter_configurations: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>]

The relational filter configurations included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations(
  database_name: str = None,
  filter_expressions: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions] = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.databaseName">database_name</a></code> | <code>str</code> | The database name specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.filterExpressions">filter_expressions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]</code> | The filter expressions specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.schemaName">schema_name</a></code> | <code>str</code> | The schema name specified in the relational filter configuration for the data source. |

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The database name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#database_name DatazoneDataSource#database_name}

---

##### `filter_expressions`<sup>Optional</sup> <a name="filter_expressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.filterExpressions"></a>

```python
filter_expressions: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]

The filter expressions specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#filter_expressions DatazoneDataSource#filter_expressions}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The schema name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#schema_name DatazoneDataSource#schema_name}

---

### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions(
  expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type">type</a></code> | <code>str</code> | The search filter expression type. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type"></a>

```python
type: str
```

- *Type:* str

The search filter expression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

### DatazoneDataSourceConfigurationRedshiftRunConfiguration <a name="DatazoneDataSourceConfigurationRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration(
  data_access_role: str = None,
  redshift_credential_configuration: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration = None,
  redshift_storage: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage = None,
  relational_filter_configurations: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.dataAccessRole">data_access_role</a></code> | <code>str</code> | The data access role included in the configuration details of the Amazon Redshift data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftCredentialConfiguration">redshift_credential_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | The details of the credentials required to access an Amazon Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftStorage">redshift_storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.relationalFilterConfigurations">relational_filter_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>]</code> | The relational filter configurations included in the configuration details of the Amazon Redshift data source. |

---

##### `data_access_role`<sup>Optional</sup> <a name="data_access_role" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.dataAccessRole"></a>

```python
data_access_role: str
```

- *Type:* str

The data access role included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

##### `redshift_credential_configuration`<sup>Optional</sup> <a name="redshift_credential_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftCredentialConfiguration"></a>

```python
redshift_credential_configuration: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

The details of the credentials required to access an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_credential_configuration DatazoneDataSource#redshift_credential_configuration}

---

##### `redshift_storage`<sup>Optional</sup> <a name="redshift_storage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftStorage"></a>

```python
redshift_storage: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_storage DatazoneDataSource#redshift_storage}

---

##### `relational_filter_configurations`<sup>Optional</sup> <a name="relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.relationalFilterConfigurations"></a>

```python
relational_filter_configurations: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>]

The relational filter configurations included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration(
  secret_manager_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | The ARN of a secret manager for an Amazon Redshift cluster. |

---

##### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

The ARN of a secret manager for an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#secret_manager_arn DatazoneDataSource#secret_manager_arn}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage(
  redshift_cluster_source: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource = None,
  redshift_serverless_source: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftClusterSource">redshift_cluster_source</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | The name of an Amazon Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftServerlessSource">redshift_serverless_source</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | The details of the Amazon Redshift Serverless workgroup storage. |

---

##### `redshift_cluster_source`<sup>Optional</sup> <a name="redshift_cluster_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftClusterSource"></a>

```python
redshift_cluster_source: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_cluster_source DatazoneDataSource#redshift_cluster_source}

---

##### `redshift_serverless_source`<sup>Optional</sup> <a name="redshift_serverless_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftServerlessSource"></a>

```python
redshift_serverless_source: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

The details of the Amazon Redshift Serverless workgroup storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_serverless_source DatazoneDataSource#redshift_serverless_source}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource(
  cluster_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.property.clusterName">cluster_name</a></code> | <code>str</code> | The name of an Amazon Redshift cluster. |

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#cluster_name DatazoneDataSource#cluster_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource(
  workgroup_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.property.workgroupName">workgroup_name</a></code> | <code>str</code> | The name of the Amazon Redshift Serverless workgroup. |

---

##### `workgroup_name`<sup>Optional</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

The name of the Amazon Redshift Serverless workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#workgroup_name DatazoneDataSource#workgroup_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations(
  database_name: str = None,
  filter_expressions: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions] = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.databaseName">database_name</a></code> | <code>str</code> | The database name specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.filterExpressions">filter_expressions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]</code> | The filter expressions specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.schemaName">schema_name</a></code> | <code>str</code> | The schema name specified in the relational filter configuration for the data source. |

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The database name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#database_name DatazoneDataSource#database_name}

---

##### `filter_expressions`<sup>Optional</sup> <a name="filter_expressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.filterExpressions"></a>

```python
filter_expressions: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]

The filter expressions specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#filter_expressions DatazoneDataSource#filter_expressions}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The schema name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#schema_name DatazoneDataSource#schema_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions(
  expression: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type">type</a></code> | <code>str</code> | The search filter expression type. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type"></a>

```python
type: str
```

- *Type:* str

The search filter expression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

### DatazoneDataSourceConfigurationSageMakerRunConfiguration <a name="DatazoneDataSourceConfigurationSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration(
  tracking_assets: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.property.trackingAssets">tracking_assets</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | The tracking assets of the Amazon SageMaker run. |

---

##### `tracking_assets`<sup>Optional</sup> <a name="tracking_assets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.property.trackingAssets"></a>

```python
tracking_assets: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

The tracking assets of the Amazon SageMaker run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#tracking_assets DatazoneDataSource#tracking_assets}

---

### DatazoneDataSourceRecommendation <a name="DatazoneDataSourceRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceRecommendation(
  enable_business_name_generation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.property.enableBusinessNameGeneration">enable_business_name_generation</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration. |

---

##### `enable_business_name_generation`<sup>Optional</sup> <a name="enable_business_name_generation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.property.enableBusinessNameGeneration"></a>

```python
enable_business_name_generation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#enable_business_name_generation DatazoneDataSource#enable_business_name_generation}

---

### DatazoneDataSourceSchedule <a name="DatazoneDataSourceSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceSchedule(
  schedule: str = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.schedule">schedule</a></code> | <code>str</code> | The schedule of the data source runs. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.timezone">timezone</a></code> | <code>str</code> | The timezone of the data source run. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The timezone of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#timezone DatazoneDataSource#timezone}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneDataSourceAssetFormsInputList <a name="DatazoneDataSourceAssetFormsInputList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceAssetFormsInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneDataSourceAssetFormsInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneDataSourceAssetFormsInput]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>]

---


### DatazoneDataSourceAssetFormsInputOutputReference <a name="DatazoneDataSourceAssetFormsInputOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetFormName">reset_form_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeIdentifier">reset_type_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeRevision">reset_type_revision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_form_name` <a name="reset_form_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetFormName"></a>

```python
def reset_form_name() -> None
```

##### `reset_type_identifier` <a name="reset_type_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeIdentifier"></a>

```python
def reset_type_identifier() -> None
```

##### `reset_type_revision` <a name="reset_type_revision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeRevision"></a>

```python
def reset_type_revision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formNameInput">form_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifierInput">type_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevisionInput">type_revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formName">form_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier">type_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision">type_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `form_name_input`<sup>Optional</sup> <a name="form_name_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formNameInput"></a>

```python
form_name_input: str
```

- *Type:* str

---

##### `type_identifier_input`<sup>Optional</sup> <a name="type_identifier_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifierInput"></a>

```python
type_identifier_input: str
```

- *Type:* str

---

##### `type_revision_input`<sup>Optional</sup> <a name="type_revision_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevisionInput"></a>

```python
type_revision_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `form_name`<sup>Required</sup> <a name="form_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formName"></a>

```python
form_name: str
```

- *Type:* str

---

##### `type_identifier`<sup>Required</sup> <a name="type_identifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier"></a>

```python
type_identifier: str
```

- *Type:* str

---

##### `type_revision`<sup>Required</sup> <a name="type_revision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision"></a>

```python
type_revision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceAssetFormsInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>

---


### DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations">put_relational_filter_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetAutoImportDataQualityResult">reset_auto_import_data_quality_result</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetDataAccessRole">reset_data_access_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetRelationalFilterConfigurations">reset_relational_filter_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_relational_filter_configurations` <a name="put_relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations"></a>

```python
def put_relational_filter_configurations(
  value: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>]

---

##### `reset_auto_import_data_quality_result` <a name="reset_auto_import_data_quality_result" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetAutoImportDataQualityResult"></a>

```python
def reset_auto_import_data_quality_result() -> None
```

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_data_access_role` <a name="reset_data_access_role" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetDataAccessRole"></a>

```python
def reset_data_access_role() -> None
```

##### `reset_relational_filter_configurations` <a name="reset_relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetRelationalFilterConfigurations"></a>

```python
def reset_relational_filter_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations">relational_filter_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResultInput">auto_import_data_quality_result_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRoleInput">data_access_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurationsInput">relational_filter_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult">auto_import_data_quality_result</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole">data_access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `relational_filter_configurations`<sup>Required</sup> <a name="relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```python
relational_filter_configurations: DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `auto_import_data_quality_result_input`<sup>Optional</sup> <a name="auto_import_data_quality_result_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResultInput"></a>

```python
auto_import_data_quality_result_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `data_access_role_input`<sup>Optional</sup> <a name="data_access_role_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRoleInput"></a>

```python
data_access_role_input: str
```

- *Type:* str

---

##### `relational_filter_configurations_input`<sup>Optional</sup> <a name="relational_filter_configurations_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurationsInput"></a>

```python
relational_filter_configurations_input: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>]

---

##### `auto_import_data_quality_result`<sup>Required</sup> <a name="auto_import_data_quality_result" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult"></a>

```python
auto_import_data_quality_result: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `data_access_role`<sup>Required</sup> <a name="data_access_role" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole"></a>

```python
data_access_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationGlueRunConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>]

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions">put_filter_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions">reset_filter_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter_expressions` <a name="put_filter_expressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions"></a>

```python
def put_filter_expressions(
  value: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]

---

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_filter_expressions` <a name="reset_filter_expressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions"></a>

```python
def reset_filter_expressions() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">filter_expressions</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput">filter_expressions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_expressions`<sup>Required</sup> <a name="filter_expressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```python
filter_expressions: DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `filter_expressions_input`<sup>Optional</sup> <a name="filter_expressions_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput"></a>

```python
filter_expressions_input: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>

---


### DatazoneDataSourceConfigurationOutputReference <a name="DatazoneDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration">put_glue_run_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration">put_redshift_run_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration">put_sage_maker_run_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetGlueRunConfiguration">reset_glue_run_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetRedshiftRunConfiguration">reset_redshift_run_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetSageMakerRunConfiguration">reset_sage_maker_run_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_glue_run_configuration` <a name="put_glue_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration"></a>

```python
def put_glue_run_configuration(
  auto_import_data_quality_result: bool | IResolvable = None,
  catalog_name: str = None,
  data_access_role: str = None,
  relational_filter_configurations: IResolvable | typing.List[DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations] = None
) -> None
```

###### `auto_import_data_quality_result`<sup>Optional</sup> <a name="auto_import_data_quality_result" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration.parameter.autoImportDataQualityResult"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to automatically import data quality metrics as part of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#auto_import_data_quality_result DatazoneDataSource#auto_import_data_quality_result}

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration.parameter.catalogName"></a>

- *Type:* str

The catalog name in the AWS Glue run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#catalog_name DatazoneDataSource#catalog_name}

---

###### `data_access_role`<sup>Optional</sup> <a name="data_access_role" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration.parameter.dataAccessRole"></a>

- *Type:* str

The data access role included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

###### `relational_filter_configurations`<sup>Optional</sup> <a name="relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration.parameter.relationalFilterConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>]

The relational filter configurations included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

##### `put_redshift_run_configuration` <a name="put_redshift_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration"></a>

```python
def put_redshift_run_configuration(
  data_access_role: str = None,
  redshift_credential_configuration: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration = None,
  redshift_storage: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage = None,
  relational_filter_configurations: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations] = None
) -> None
```

###### `data_access_role`<sup>Optional</sup> <a name="data_access_role" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration.parameter.dataAccessRole"></a>

- *Type:* str

The data access role included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

###### `redshift_credential_configuration`<sup>Optional</sup> <a name="redshift_credential_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration.parameter.redshiftCredentialConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

The details of the credentials required to access an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_credential_configuration DatazoneDataSource#redshift_credential_configuration}

---

###### `redshift_storage`<sup>Optional</sup> <a name="redshift_storage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration.parameter.redshiftStorage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_storage DatazoneDataSource#redshift_storage}

---

###### `relational_filter_configurations`<sup>Optional</sup> <a name="relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration.parameter.relationalFilterConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>]

The relational filter configurations included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

##### `put_sage_maker_run_configuration` <a name="put_sage_maker_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration"></a>

```python
def put_sage_maker_run_configuration(
  tracking_assets: IResolvable | typing.Mapping[typing.List[str]] = None
) -> None
```

###### `tracking_assets`<sup>Optional</sup> <a name="tracking_assets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration.parameter.trackingAssets"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

The tracking assets of the Amazon SageMaker run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#tracking_assets DatazoneDataSource#tracking_assets}

---

##### `reset_glue_run_configuration` <a name="reset_glue_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetGlueRunConfiguration"></a>

```python
def reset_glue_run_configuration() -> None
```

##### `reset_redshift_run_configuration` <a name="reset_redshift_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetRedshiftRunConfiguration"></a>

```python
def reset_redshift_run_configuration() -> None
```

##### `reset_sage_maker_run_configuration` <a name="reset_sage_maker_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetSageMakerRunConfiguration"></a>

```python
def reset_sage_maker_run_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration">glue_run_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration">redshift_run_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration">sage_maker_run_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfigurationInput">glue_run_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfigurationInput">redshift_run_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfigurationInput">sage_maker_run_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_run_configuration`<sup>Required</sup> <a name="glue_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration"></a>

```python
glue_run_configuration: DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a>

---

##### `redshift_run_configuration`<sup>Required</sup> <a name="redshift_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration"></a>

```python
redshift_run_configuration: DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a>

---

##### `sage_maker_run_configuration`<sup>Required</sup> <a name="sage_maker_run_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration"></a>

```python
sage_maker_run_configuration: DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a>

---

##### `glue_run_configuration_input`<sup>Optional</sup> <a name="glue_run_configuration_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfigurationInput"></a>

```python
glue_run_configuration_input: IResolvable | DatazoneDataSourceConfigurationGlueRunConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

---

##### `redshift_run_configuration_input`<sup>Optional</sup> <a name="redshift_run_configuration_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfigurationInput"></a>

```python
redshift_run_configuration_input: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---

##### `sage_maker_run_configuration_input`<sup>Optional</sup> <a name="sage_maker_run_configuration_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfigurationInput"></a>

```python
sage_maker_run_configuration_input: IResolvable | DatazoneDataSourceConfigurationSageMakerRunConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration">put_redshift_credential_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage">put_redshift_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations">put_relational_filter_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetDataAccessRole">reset_data_access_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftCredentialConfiguration">reset_redshift_credential_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftStorage">reset_redshift_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRelationalFilterConfigurations">reset_relational_filter_configurations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_redshift_credential_configuration` <a name="put_redshift_credential_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration"></a>

```python
def put_redshift_credential_configuration(
  secret_manager_arn: str = None
) -> None
```

###### `secret_manager_arn`<sup>Optional</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration.parameter.secretManagerArn"></a>

- *Type:* str

The ARN of a secret manager for an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#secret_manager_arn DatazoneDataSource#secret_manager_arn}

---

##### `put_redshift_storage` <a name="put_redshift_storage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage"></a>

```python
def put_redshift_storage(
  redshift_cluster_source: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource = None,
  redshift_serverless_source: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource = None
) -> None
```

###### `redshift_cluster_source`<sup>Optional</sup> <a name="redshift_cluster_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage.parameter.redshiftClusterSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_cluster_source DatazoneDataSource#redshift_cluster_source}

---

###### `redshift_serverless_source`<sup>Optional</sup> <a name="redshift_serverless_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage.parameter.redshiftServerlessSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

The details of the Amazon Redshift Serverless workgroup storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#redshift_serverless_source DatazoneDataSource#redshift_serverless_source}

---

##### `put_relational_filter_configurations` <a name="put_relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations"></a>

```python
def put_relational_filter_configurations(
  value: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>]

---

##### `reset_data_access_role` <a name="reset_data_access_role" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetDataAccessRole"></a>

```python
def reset_data_access_role() -> None
```

##### `reset_redshift_credential_configuration` <a name="reset_redshift_credential_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftCredentialConfiguration"></a>

```python
def reset_redshift_credential_configuration() -> None
```

##### `reset_redshift_storage` <a name="reset_redshift_storage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftStorage"></a>

```python
def reset_redshift_storage() -> None
```

##### `reset_relational_filter_configurations` <a name="reset_relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRelationalFilterConfigurations"></a>

```python
def reset_relational_filter_configurations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration">redshift_credential_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage">redshift_storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations">relational_filter_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRoleInput">data_access_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfigurationInput">redshift_credential_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorageInput">redshift_storage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurationsInput">relational_filter_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole">data_access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redshift_credential_configuration`<sup>Required</sup> <a name="redshift_credential_configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration"></a>

```python
redshift_credential_configuration: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a>

---

##### `redshift_storage`<sup>Required</sup> <a name="redshift_storage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage"></a>

```python
redshift_storage: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a>

---

##### `relational_filter_configurations`<sup>Required</sup> <a name="relational_filter_configurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```python
relational_filter_configurations: DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `data_access_role_input`<sup>Optional</sup> <a name="data_access_role_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRoleInput"></a>

```python
data_access_role_input: str
```

- *Type:* str

---

##### `redshift_credential_configuration_input`<sup>Optional</sup> <a name="redshift_credential_configuration_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfigurationInput"></a>

```python
redshift_credential_configuration_input: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---

##### `redshift_storage_input`<sup>Optional</sup> <a name="redshift_storage_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorageInput"></a>

```python
redshift_storage_input: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---

##### `relational_filter_configurations_input`<sup>Optional</sup> <a name="relational_filter_configurations_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurationsInput"></a>

```python
relational_filter_configurations_input: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>]

---

##### `data_access_role`<sup>Required</sup> <a name="data_access_role" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole"></a>

```python
data_access_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resetSecretManagerArn">reset_secret_manager_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_manager_arn` <a name="reset_secret_manager_arn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resetSecretManagerArn"></a>

```python
def reset_secret_manager_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArnInput">secret_manager_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn">secret_manager_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_manager_arn_input`<sup>Optional</sup> <a name="secret_manager_arn_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArnInput"></a>

```python
secret_manager_arn_input: str
```

- *Type:* str

---

##### `secret_manager_arn`<sup>Required</sup> <a name="secret_manager_arn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn"></a>

```python
secret_manager_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource">put_redshift_cluster_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource">put_redshift_serverless_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftClusterSource">reset_redshift_cluster_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftServerlessSource">reset_redshift_serverless_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_redshift_cluster_source` <a name="put_redshift_cluster_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource"></a>

```python
def put_redshift_cluster_source(
  cluster_name: str = None
) -> None
```

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource.parameter.clusterName"></a>

- *Type:* str

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#cluster_name DatazoneDataSource#cluster_name}

---

##### `put_redshift_serverless_source` <a name="put_redshift_serverless_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource"></a>

```python
def put_redshift_serverless_source(
  workgroup_name: str = None
) -> None
```

###### `workgroup_name`<sup>Optional</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource.parameter.workgroupName"></a>

- *Type:* str

The name of the Amazon Redshift Serverless workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_data_source#workgroup_name DatazoneDataSource#workgroup_name}

---

##### `reset_redshift_cluster_source` <a name="reset_redshift_cluster_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftClusterSource"></a>

```python
def reset_redshift_cluster_source() -> None
```

##### `reset_redshift_serverless_source` <a name="reset_redshift_serverless_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftServerlessSource"></a>

```python
def reset_redshift_serverless_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource">redshift_cluster_source</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource">redshift_serverless_source</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSourceInput">redshift_cluster_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSourceInput">redshift_serverless_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redshift_cluster_source`<sup>Required</sup> <a name="redshift_cluster_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource"></a>

```python
redshift_cluster_source: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a>

---

##### `redshift_serverless_source`<sup>Required</sup> <a name="redshift_serverless_source" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource"></a>

```python
redshift_serverless_source: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a>

---

##### `redshift_cluster_source_input`<sup>Optional</sup> <a name="redshift_cluster_source_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSourceInput"></a>

```python
redshift_cluster_source_input: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---

##### `redshift_serverless_source_input`<sup>Optional</sup> <a name="redshift_serverless_source_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSourceInput"></a>

```python
redshift_serverless_source_input: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resetWorkgroupName">reset_workgroup_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workgroup_name` <a name="reset_workgroup_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resetWorkgroupName"></a>

```python
def reset_workgroup_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupNameInput">workgroup_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName">workgroup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workgroup_name_input`<sup>Optional</sup> <a name="workgroup_name_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupNameInput"></a>

```python
workgroup_name_input: str
```

- *Type:* str

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>]

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions">put_filter_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions">reset_filter_expressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter_expressions` <a name="put_filter_expressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions"></a>

```python
def put_filter_expressions(
  value: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]

---

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_filter_expressions` <a name="reset_filter_expressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions"></a>

```python
def reset_filter_expressions() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">filter_expressions</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput">filter_expressions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_expressions`<sup>Required</sup> <a name="filter_expressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```python
filter_expressions: DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `filter_expressions_input`<sup>Optional</sup> <a name="filter_expressions_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput"></a>

```python
filter_expressions_input: IResolvable | typing.List[DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>

---


### DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resetTrackingAssets">reset_tracking_assets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tracking_assets` <a name="reset_tracking_assets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resetTrackingAssets"></a>

```python
def reset_tracking_assets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssetsInput">tracking_assets_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets">tracking_assets</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tracking_assets_input`<sup>Optional</sup> <a name="tracking_assets_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssetsInput"></a>

```python
tracking_assets_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `tracking_assets`<sup>Required</sup> <a name="tracking_assets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets"></a>

```python
tracking_assets: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceConfigurationSageMakerRunConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---


### DatazoneDataSourceRecommendationOutputReference <a name="DatazoneDataSourceRecommendationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceRecommendationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resetEnableBusinessNameGeneration">reset_enable_business_name_generation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_business_name_generation` <a name="reset_enable_business_name_generation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resetEnableBusinessNameGeneration"></a>

```python
def reset_enable_business_name_generation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGenerationInput">enable_business_name_generation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration">enable_business_name_generation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_business_name_generation_input`<sup>Optional</sup> <a name="enable_business_name_generation_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGenerationInput"></a>

```python
enable_business_name_generation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_business_name_generation`<sup>Required</sup> <a name="enable_business_name_generation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration"></a>

```python
enable_business_name_generation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceRecommendation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

---


### DatazoneDataSourceScheduleOutputReference <a name="DatazoneDataSourceScheduleOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_data_source

datazoneDataSource.DatazoneDataSourceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneDataSourceSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

---



