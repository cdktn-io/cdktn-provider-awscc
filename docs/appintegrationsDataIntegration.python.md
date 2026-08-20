# `appintegrationsDataIntegration` Submodule <a name="`appintegrationsDataIntegration` Submodule" id="@cdktn/provider-awscc.appintegrationsDataIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsDataIntegration <a name="AppintegrationsDataIntegration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration awscc_appintegrations_data_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  kms_key: str,
  name: str,
  source_uri: str,
  description: str = None,
  file_configuration: AppintegrationsDataIntegrationFileConfiguration = None,
  object_configuration: IResolvable | typing.Mapping[IResolvable | typing.Mapping[typing.List[str]]] = None,
  schedule_config: AppintegrationsDataIntegrationScheduleConfig = None,
  tags: IResolvable | typing.List[AppintegrationsDataIntegrationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key of the data integration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the data integration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.sourceUri">source_uri</a></code> | <code>str</code> | The URI of the data source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.description">description</a></code> | <code>str</code> | The data integration description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.fileConfiguration">file_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a></code> | The configuration for what files should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.objectConfiguration">object_configuration</a></code> | <code>cdktn.IResolvable \| typing.Mapping[cdktn.IResolvable \| typing.Mapping[typing.List[str]]]</code> | The configuration for what data should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | The name of the data and how often it should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>]</code> | The tags (keys and values) associated with the data integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.kmsKey"></a>

- *Type:* str

The KMS key of the data integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.name"></a>

- *Type:* str

The name of the data integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.sourceUri"></a>

- *Type:* str

The URI of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.description"></a>

- *Type:* str

The data integration description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}

---

##### `file_configuration`<sup>Optional</sup> <a name="file_configuration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.fileConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a>

The configuration for what files should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#file_configuration AppintegrationsDataIntegration#file_configuration}

---

##### `object_configuration`<sup>Optional</sup> <a name="object_configuration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.objectConfiguration"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[cdktn.IResolvable | typing.Mapping[typing.List[str]]]

The configuration for what data should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#object_configuration AppintegrationsDataIntegration#object_configuration}

---

##### `schedule_config`<sup>Optional</sup> <a name="schedule_config" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scheduleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

The name of the data and how often it should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#schedule_config AppintegrationsDataIntegration#schedule_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>]

The tags (keys and values) associated with the data integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putFileConfiguration">put_file_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig">put_schedule_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetFileConfiguration">reset_file_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetObjectConfiguration">reset_object_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetScheduleConfig">reset_schedule_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_file_configuration` <a name="put_file_configuration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putFileConfiguration"></a>

```python
def put_file_configuration(
  filters: IResolvable | typing.Mapping[typing.List[str]] = None,
  folders: typing.List[str] = None
) -> None
```

###### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putFileConfiguration.parameter.filters"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

Restrictions for what files should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#filters AppintegrationsDataIntegration#filters}

---

###### `folders`<sup>Optional</sup> <a name="folders" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putFileConfiguration.parameter.folders"></a>

- *Type:* typing.List[str]

Identifiers for the source folders to pull all files from recursively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#folders AppintegrationsDataIntegration#folders}

---

##### `put_schedule_config` <a name="put_schedule_config" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig"></a>

```python
def put_schedule_config(
  first_execution_from: str = None,
  object: str = None,
  schedule_expression: str = None
) -> None
```

###### `first_execution_from`<sup>Optional</sup> <a name="first_execution_from" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig.parameter.firstExecutionFrom"></a>

- *Type:* str

The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}

---

###### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig.parameter.object"></a>

- *Type:* str

The name of the object to pull from the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}

---

###### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig.parameter.scheduleExpression"></a>

- *Type:* str

How often the data should be pulled from data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppintegrationsDataIntegrationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_file_configuration` <a name="reset_file_configuration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetFileConfiguration"></a>

```python
def reset_file_configuration() -> None
```

##### `reset_object_configuration` <a name="reset_object_configuration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetObjectConfiguration"></a>

```python
def reset_object_configuration() -> None
```

##### `reset_schedule_config` <a name="reset_schedule_config" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetScheduleConfig"></a>

```python
def reset_schedule_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppintegrationsDataIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppintegrationsDataIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppintegrationsDataIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dataIntegrationArn">data_integration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dataIntegrationId">data_integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fileConfiguration">file_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference">AppintegrationsDataIntegrationFileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList">AppintegrationsDataIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fileConfigurationInput">file_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.objectConfigurationInput">object_configuration_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[cdktn.IResolvable \| typing.Mapping[typing.List[str]]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput">schedule_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput">source_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.objectConfiguration">object_configuration</a></code> | <code>cdktn.IResolvable \| typing.Mapping[cdktn.IResolvable \| typing.Mapping[typing.List[str]]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri">source_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_integration_arn`<sup>Required</sup> <a name="data_integration_arn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dataIntegrationArn"></a>

```python
data_integration_arn: str
```

- *Type:* str

---

##### `data_integration_id`<sup>Required</sup> <a name="data_integration_id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dataIntegrationId"></a>

```python
data_integration_id: str
```

- *Type:* str

---

##### `file_configuration`<sup>Required</sup> <a name="file_configuration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fileConfiguration"></a>

```python
file_configuration: AppintegrationsDataIntegrationFileConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference">AppintegrationsDataIntegrationFileConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schedule_config`<sup>Required</sup> <a name="schedule_config" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig"></a>

```python
schedule_config: AppintegrationsDataIntegrationScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags"></a>

```python
tags: AppintegrationsDataIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList">AppintegrationsDataIntegrationTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `file_configuration_input`<sup>Optional</sup> <a name="file_configuration_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fileConfigurationInput"></a>

```python
file_configuration_input: IResolvable | AppintegrationsDataIntegrationFileConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a>

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_configuration_input`<sup>Optional</sup> <a name="object_configuration_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.objectConfigurationInput"></a>

```python
object_configuration_input: IResolvable | typing.Mapping[IResolvable | typing.Mapping[typing.List[str]]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[cdktn.IResolvable | typing.Mapping[typing.List[str]]]

---

##### `schedule_config_input`<sup>Optional</sup> <a name="schedule_config_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput"></a>

```python
schedule_config_input: IResolvable | AppintegrationsDataIntegrationScheduleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---

##### `source_uri_input`<sup>Optional</sup> <a name="source_uri_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput"></a>

```python
source_uri_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppintegrationsDataIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_configuration`<sup>Required</sup> <a name="object_configuration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.objectConfiguration"></a>

```python
object_configuration: IResolvable | typing.Mapping[IResolvable | typing.Mapping[typing.List[str]]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[cdktn.IResolvable | typing.Mapping[typing.List[str]]]

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri"></a>

```python
source_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsDataIntegrationConfig <a name="AppintegrationsDataIntegrationConfig" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  kms_key: str,
  name: str,
  source_uri: str,
  description: str = None,
  file_configuration: AppintegrationsDataIntegrationFileConfiguration = None,
  object_configuration: IResolvable | typing.Mapping[IResolvable | typing.Mapping[typing.List[str]]] = None,
  schedule_config: AppintegrationsDataIntegrationScheduleConfig = None,
  tags: IResolvable | typing.List[AppintegrationsDataIntegrationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | The KMS key of the data integration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name">name</a></code> | <code>str</code> | The name of the data integration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri">source_uri</a></code> | <code>str</code> | The URI of the data source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description">description</a></code> | <code>str</code> | The data integration description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.fileConfiguration">file_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a></code> | The configuration for what files should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.objectConfiguration">object_configuration</a></code> | <code>cdktn.IResolvable \| typing.Mapping[cdktn.IResolvable \| typing.Mapping[typing.List[str]]]</code> | The configuration for what data should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig">schedule_config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | The name of the data and how often it should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>]</code> | The tags (keys and values) associated with the data integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The KMS key of the data integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the data integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}

---

##### `source_uri`<sup>Required</sup> <a name="source_uri" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri"></a>

```python
source_uri: str
```

- *Type:* str

The URI of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The data integration description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}

---

##### `file_configuration`<sup>Optional</sup> <a name="file_configuration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.fileConfiguration"></a>

```python
file_configuration: AppintegrationsDataIntegrationFileConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a>

The configuration for what files should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#file_configuration AppintegrationsDataIntegration#file_configuration}

---

##### `object_configuration`<sup>Optional</sup> <a name="object_configuration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.objectConfiguration"></a>

```python
object_configuration: IResolvable | typing.Mapping[IResolvable | typing.Mapping[typing.List[str]]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[cdktn.IResolvable | typing.Mapping[typing.List[str]]]

The configuration for what data should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#object_configuration AppintegrationsDataIntegration#object_configuration}

---

##### `schedule_config`<sup>Optional</sup> <a name="schedule_config" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig"></a>

```python
schedule_config: AppintegrationsDataIntegrationScheduleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

The name of the data and how often it should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#schedule_config AppintegrationsDataIntegration#schedule_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppintegrationsDataIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>]

The tags (keys and values) associated with the data integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}

---

### AppintegrationsDataIntegrationFileConfiguration <a name="AppintegrationsDataIntegrationFileConfiguration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration(
  filters: IResolvable | typing.Mapping[typing.List[str]] = None,
  folders: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | Restrictions for what files should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.property.folders">folders</a></code> | <code>typing.List[str]</code> | Identifiers for the source folders to pull all files from recursively. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.property.filters"></a>

```python
filters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

Restrictions for what files should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#filters AppintegrationsDataIntegration#filters}

---

##### `folders`<sup>Optional</sup> <a name="folders" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.property.folders"></a>

```python
folders: typing.List[str]
```

- *Type:* typing.List[str]

Identifiers for the source folders to pull all files from recursively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#folders AppintegrationsDataIntegration#folders}

---

### AppintegrationsDataIntegrationScheduleConfig <a name="AppintegrationsDataIntegrationScheduleConfig" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig(
  first_execution_from: str = None,
  object: str = None,
  schedule_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom">first_execution_from</a></code> | <code>str</code> | The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object">object</a></code> | <code>str</code> | The name of the object to pull from the data source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | How often the data should be pulled from data source. |

---

##### `first_execution_from`<sup>Optional</sup> <a name="first_execution_from" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom"></a>

```python
first_execution_from: str
```

- *Type:* str

The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object"></a>

```python
object: str
```

- *Type:* str

The name of the object to pull from the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}

---

##### `schedule_expression`<sup>Optional</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

How often the data should be pulled from data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}

---

### AppintegrationsDataIntegrationTags <a name="AppintegrationsDataIntegrationTags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.property.key">key</a></code> | <code>str</code> | A key to identify the tag. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.property.value">value</a></code> | <code>str</code> | Corresponding tag value for the key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.property.key"></a>

```python
key: str
```

- *Type:* str

A key to identify the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#key AppintegrationsDataIntegration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Corresponding tag value for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appintegrations_data_integration#value AppintegrationsDataIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsDataIntegrationFileConfigurationOutputReference <a name="AppintegrationsDataIntegrationFileConfigurationOutputReference" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resetFolders">reset_folders</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filters` <a name="reset_filters" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_folders` <a name="reset_folders" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resetFolders"></a>

```python
def reset_folders() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.filtersInput">filters_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.foldersInput">folders_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters">filters</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders">folders</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.filtersInput"></a>

```python
filters_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `folders_input`<sup>Optional</sup> <a name="folders_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.foldersInput"></a>

```python
folders_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters"></a>

```python
filters: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `folders`<sup>Required</sup> <a name="folders" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders"></a>

```python
folders: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppintegrationsDataIntegrationFileConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a>

---


### AppintegrationsDataIntegrationScheduleConfigOutputReference <a name="AppintegrationsDataIntegrationScheduleConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetFirstExecutionFrom">reset_first_execution_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetScheduleExpression">reset_schedule_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_first_execution_from` <a name="reset_first_execution_from" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetFirstExecutionFrom"></a>

```python
def reset_first_execution_from() -> None
```

##### `reset_object` <a name="reset_object" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_schedule_expression` <a name="reset_schedule_expression" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetScheduleExpression"></a>

```python
def reset_schedule_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput">first_execution_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom">first_execution_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_execution_from_input`<sup>Optional</sup> <a name="first_execution_from_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput"></a>

```python
first_execution_from_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `first_execution_from`<sup>Required</sup> <a name="first_execution_from" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom"></a>

```python
first_execution_from: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppintegrationsDataIntegrationScheduleConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---


### AppintegrationsDataIntegrationTagsList <a name="AppintegrationsDataIntegrationTagsList" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppintegrationsDataIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppintegrationsDataIntegrationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>]

---


### AppintegrationsDataIntegrationTagsOutputReference <a name="AppintegrationsDataIntegrationTagsOutputReference" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appintegrations_data_integration

appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppintegrationsDataIntegrationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags">AppintegrationsDataIntegrationTags</a>

---



