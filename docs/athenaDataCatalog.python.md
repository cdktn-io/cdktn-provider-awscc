# `athenaDataCatalog` Submodule <a name="`athenaDataCatalog` Submodule" id="@cdktn/provider-awscc.athenaDataCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaDataCatalog <a name="AthenaDataCatalog" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog awscc_athena_data_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer"></a>

```python
from cdktn_provider_awscc import athena_data_catalog

athenaDataCatalog.AthenaDataCatalog(
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
  type: str,
  connection_type: str = None,
  description: str = None,
  error: str = None,
  parameters: typing.Mapping[str] = None,
  status: str = None,
  tags: IResolvable | typing.List[AthenaDataCatalogTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the data catalog to create. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of data catalog to create: LAMBDA for a federated catalog, GLUE for AWS Glue Catalog, or HIVE for an external hive metastore. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.connectionType">connection_type</a></code> | <code>str</code> | The type of connection for a FEDERATED data catalog. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the data catalog to be created. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.error">error</a></code> | <code>str</code> | Text of the error that occurred during data catalog creation or deletion. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Specifies the Lambda function or functions to use for creating the data catalog. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the creation or deletion of the data catalog. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>]</code> | A list of comma separated tags to add to the data catalog that is created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.name"></a>

- *Type:* str

The name of the data catalog to create.

The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#name AthenaDataCatalog#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.type"></a>

- *Type:* str

The type of data catalog to create: LAMBDA for a federated catalog, GLUE for AWS Glue Catalog, or HIVE for an external hive metastore.

FEDERATED is a federated catalog for which Athena creates the connection and the Lambda function for you based on the parameters that you pass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#type AthenaDataCatalog#type}

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.connectionType"></a>

- *Type:* str

The type of connection for a FEDERATED data catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#connection_type AthenaDataCatalog#connection_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.description"></a>

- *Type:* str

A description of the data catalog to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#description AthenaDataCatalog#description}

---

##### `error`<sup>Optional</sup> <a name="error" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.error"></a>

- *Type:* str

Text of the error that occurred during data catalog creation or deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#error AthenaDataCatalog#error}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Specifies the Lambda function or functions to use for creating the data catalog.

This is a mapping whose values depend on the catalog type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#parameters AthenaDataCatalog#parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.status"></a>

- *Type:* str

The status of the creation or deletion of the data catalog.

LAMBDA, GLUE, and HIVE data catalog types are created synchronously. Their status is either CREATE_COMPLETE or CREATE_FAILED. The FEDERATED data catalog type is created asynchronously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#status AthenaDataCatalog#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>]

A list of comma separated tags to add to the data catalog that is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#tags AthenaDataCatalog#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetError">reset_error</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AthenaDataCatalogTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>]

---

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_error` <a name="reset_error" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetError"></a>

```python
def reset_error() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AthenaDataCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.isConstruct"></a>

```python
from cdktn_provider_awscc import athena_data_catalog

athenaDataCatalog.AthenaDataCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.isTerraformElement"></a>

```python
from cdktn_provider_awscc import athena_data_catalog

athenaDataCatalog.AthenaDataCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.isTerraformResource"></a>

```python
from cdktn_provider_awscc import athena_data_catalog

athenaDataCatalog.AthenaDataCatalog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import athena_data_catalog

athenaDataCatalog.AthenaDataCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AthenaDataCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AthenaDataCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AthenaDataCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AthenaDataCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList">AthenaDataCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.errorInput">error_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.error">error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.tags"></a>

```python
tags: AthenaDataCatalogTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList">AthenaDataCatalogTagsList</a>

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `error_input`<sup>Optional</sup> <a name="error_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.errorInput"></a>

```python
error_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AthenaDataCatalogTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.error"></a>

```python
error: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaDataCatalogConfig <a name="AthenaDataCatalogConfig" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.Initializer"></a>

```python
from cdktn_provider_awscc import athena_data_catalog

athenaDataCatalog.AthenaDataCatalogConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  connection_type: str = None,
  description: str = None,
  error: str = None,
  parameters: typing.Mapping[str] = None,
  status: str = None,
  tags: IResolvable | typing.List[AthenaDataCatalogTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.name">name</a></code> | <code>str</code> | The name of the data catalog to create. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.type">type</a></code> | <code>str</code> | The type of data catalog to create: LAMBDA for a federated catalog, GLUE for AWS Glue Catalog, or HIVE for an external hive metastore. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.connectionType">connection_type</a></code> | <code>str</code> | The type of connection for a FEDERATED data catalog. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.description">description</a></code> | <code>str</code> | A description of the data catalog to be created. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.error">error</a></code> | <code>str</code> | Text of the error that occurred during data catalog creation or deletion. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Specifies the Lambda function or functions to use for creating the data catalog. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.status">status</a></code> | <code>str</code> | The status of the creation or deletion of the data catalog. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>]</code> | A list of comma separated tags to add to the data catalog that is created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the data catalog to create.

The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#name AthenaDataCatalog#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of data catalog to create: LAMBDA for a federated catalog, GLUE for AWS Glue Catalog, or HIVE for an external hive metastore.

FEDERATED is a federated catalog for which Athena creates the connection and the Lambda function for you based on the parameters that you pass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#type AthenaDataCatalog#type}

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

The type of connection for a FEDERATED data catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#connection_type AthenaDataCatalog#connection_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the data catalog to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#description AthenaDataCatalog#description}

---

##### `error`<sup>Optional</sup> <a name="error" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.error"></a>

```python
error: str
```

- *Type:* str

Text of the error that occurred during data catalog creation or deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#error AthenaDataCatalog#error}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies the Lambda function or functions to use for creating the data catalog.

This is a mapping whose values depend on the catalog type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#parameters AthenaDataCatalog#parameters}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the creation or deletion of the data catalog.

LAMBDA, GLUE, and HIVE data catalog types are created synchronously. Their status is either CREATE_COMPLETE or CREATE_FAILED. The FEDERATED data catalog type is created asynchronously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#status AthenaDataCatalog#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AthenaDataCatalogTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>]

A list of comma separated tags to add to the data catalog that is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#tags AthenaDataCatalog#tags}

---

### AthenaDataCatalogTags <a name="AthenaDataCatalogTags" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags.Initializer"></a>

```python
from cdktn_provider_awscc import athena_data_catalog

athenaDataCatalog.AthenaDataCatalogTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#key AthenaDataCatalog#key}. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#value AthenaDataCatalog#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#key AthenaDataCatalog#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/athena_data_catalog#value AthenaDataCatalog#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaDataCatalogTagsList <a name="AthenaDataCatalogTagsList" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import athena_data_catalog

athenaDataCatalog.AthenaDataCatalogTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AthenaDataCatalogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AthenaDataCatalogTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>]

---


### AthenaDataCatalogTagsOutputReference <a name="AthenaDataCatalogTagsOutputReference" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import athena_data_catalog

athenaDataCatalog.AthenaDataCatalogTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AthenaDataCatalogTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.athenaDataCatalog.AthenaDataCatalogTags">AthenaDataCatalogTags</a>

---



