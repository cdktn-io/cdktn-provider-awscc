# `dataAwsccRdsCustomDbEngineVersion` Submodule <a name="`dataAwsccRdsCustomDbEngineVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRdsCustomDbEngineVersion <a name="DataAwsccRdsCustomDbEngineVersion" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/rds_custom_db_engine_version awscc_rds_custom_db_engine_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rds_custom_db_engine_version

dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/rds_custom_db_engine_version#id DataAwsccRdsCustomDbEngineVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRdsCustomDbEngineVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_rds_custom_db_engine_version

dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_rds_custom_db_engine_version

dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_rds_custom_db_engine_version

dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_rds_custom_db_engine_version

dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRdsCustomDbEngineVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRdsCustomDbEngineVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRdsCustomDbEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/rds_custom_db_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRdsCustomDbEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.databaseInstallationFiles">database_installation_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName">database_installation_files_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix">database_installation_files_s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.dbEngineVersionArn">db_engine_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.manifest">manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifier">source_custom_db_engine_version_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList">DataAwsccRdsCustomDbEngineVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.useAwsProvidedLatestImage">use_aws_provided_latest_image</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `database_installation_files`<sup>Required</sup> <a name="database_installation_files" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.databaseInstallationFiles"></a>

```python
database_installation_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_installation_files_s3_bucket_name`<sup>Required</sup> <a name="database_installation_files_s3_bucket_name" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName"></a>

```python
database_installation_files_s3_bucket_name: str
```

- *Type:* str

---

##### `database_installation_files_s3_prefix`<sup>Required</sup> <a name="database_installation_files_s3_prefix" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix"></a>

```python
database_installation_files_s3_prefix: str
```

- *Type:* str

---

##### `db_engine_version_arn`<sup>Required</sup> <a name="db_engine_version_arn" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.dbEngineVersionArn"></a>

```python
db_engine_version_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

---

##### `source_custom_db_engine_version_identifier`<sup>Required</sup> <a name="source_custom_db_engine_version_identifier" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifier"></a>

```python
source_custom_db_engine_version_identifier: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.tags"></a>

```python
tags: DataAwsccRdsCustomDbEngineVersionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList">DataAwsccRdsCustomDbEngineVersionTagsList</a>

---

##### `use_aws_provided_latest_image`<sup>Required</sup> <a name="use_aws_provided_latest_image" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.useAwsProvidedLatestImage"></a>

```python
use_aws_provided_latest_image: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRdsCustomDbEngineVersionConfig <a name="DataAwsccRdsCustomDbEngineVersionConfig" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rds_custom_db_engine_version

dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/rds_custom_db_engine_version#id DataAwsccRdsCustomDbEngineVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRdsCustomDbEngineVersionTags <a name="DataAwsccRdsCustomDbEngineVersionTags" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rds_custom_db_engine_version

dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRdsCustomDbEngineVersionTagsList <a name="DataAwsccRdsCustomDbEngineVersionTagsList" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rds_custom_db_engine_version

dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRdsCustomDbEngineVersionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRdsCustomDbEngineVersionTagsOutputReference <a name="DataAwsccRdsCustomDbEngineVersionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rds_custom_db_engine_version

dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTags">DataAwsccRdsCustomDbEngineVersionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRdsCustomDbEngineVersionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRdsCustomDbEngineVersion.DataAwsccRdsCustomDbEngineVersionTags">DataAwsccRdsCustomDbEngineVersionTags</a>

---



