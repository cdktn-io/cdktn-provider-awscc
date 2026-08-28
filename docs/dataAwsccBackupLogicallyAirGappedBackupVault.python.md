# `dataAwsccBackupLogicallyAirGappedBackupVault` Submodule <a name="`dataAwsccBackupLogicallyAirGappedBackupVault` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupLogicallyAirGappedBackupVault <a name="DataAwsccBackupLogicallyAirGappedBackupVault" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_logically_air_gapped_backup_vault awscc_backup_logically_air_gapped_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_backup_logically_air_gapped_backup_vault

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_logically_air_gapped_backup_vault#id DataAwsccBackupLogicallyAirGappedBackupVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_backup_logically_air_gapped_backup_vault

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_backup_logically_air_gapped_backup_vault

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_backup_logically_air_gapped_backup_vault

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_backup_logically_air_gapped_backup_vault

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBackupLogicallyAirGappedBackupVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBackupLogicallyAirGappedBackupVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBackupLogicallyAirGappedBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_logically_air_gapped_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupLogicallyAirGappedBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.accessPolicy">access_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultArn">backup_vault_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultName">backup_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultTags">backup_vault_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.encryptionKeyArn">encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn">mpa_approval_team_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.notifications">notifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference">DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultState">vault_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultType">vault_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_policy`<sup>Required</sup> <a name="access_policy" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.accessPolicy"></a>

```python
access_policy: str
```

- *Type:* str

---

##### `backup_vault_arn`<sup>Required</sup> <a name="backup_vault_arn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultArn"></a>

```python
backup_vault_arn: str
```

- *Type:* str

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultName"></a>

```python
backup_vault_name: str
```

- *Type:* str

---

##### `backup_vault_tags`<sup>Required</sup> <a name="backup_vault_tags" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.backupVaultTags"></a>

```python
backup_vault_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_key_arn`<sup>Required</sup> <a name="encryption_key_arn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.encryptionKeyArn"></a>

```python
encryption_key_arn: str
```

- *Type:* str

---

##### `max_retention_days`<sup>Required</sup> <a name="max_retention_days" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.maxRetentionDays"></a>

```python
max_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_retention_days`<sup>Required</sup> <a name="min_retention_days" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.minRetentionDays"></a>

```python
min_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mpa_approval_team_arn`<sup>Required</sup> <a name="mpa_approval_team_arn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.mpaApprovalTeamArn"></a>

```python
mpa_approval_team_arn: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.notifications"></a>

```python
notifications: DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference">DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference</a>

---

##### `vault_state`<sup>Required</sup> <a name="vault_state" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultState"></a>

```python
vault_state: str
```

- *Type:* str

---

##### `vault_type`<sup>Required</sup> <a name="vault_type" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.vaultType"></a>

```python
vault_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupLogicallyAirGappedBackupVaultConfig <a name="DataAwsccBackupLogicallyAirGappedBackupVaultConfig" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_backup_logically_air_gapped_backup_vault

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/backup_logically_air_gapped_backup_vault#id DataAwsccBackupLogicallyAirGappedBackupVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupLogicallyAirGappedBackupVaultNotifications <a name="DataAwsccBackupLogicallyAirGappedBackupVaultNotifications" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_backup_logically_air_gapped_backup_vault

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference <a name="DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_backup_logically_air_gapped_backup_vault

dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents">backup_vault_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications">DataAwsccBackupLogicallyAirGappedBackupVaultNotifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_vault_events`<sup>Required</sup> <a name="backup_vault_events" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.backupVaultEvents"></a>

```python
backup_vault_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBackupLogicallyAirGappedBackupVaultNotifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLogicallyAirGappedBackupVault.DataAwsccBackupLogicallyAirGappedBackupVaultNotifications">DataAwsccBackupLogicallyAirGappedBackupVaultNotifications</a>

---



