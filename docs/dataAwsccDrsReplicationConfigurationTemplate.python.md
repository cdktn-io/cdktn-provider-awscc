# `dataAwsccDrsReplicationConfigurationTemplate` Submodule <a name="`dataAwsccDrsReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDrsReplicationConfigurationTemplate <a name="DataAwsccDrsReplicationConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template awscc_drs_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template#id DataAwsccDrsReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDrsReplicationConfigurationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDrsReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDrsReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associate_default_security_group</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.autoReplicateNewDisks">auto_replicate_new_disks</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidth_throttling</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.createPublicIp">create_public_ip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dataPlaneRouting">data_plane_routing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">default_large_staging_disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryption">ebs_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebs_encryption_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.internetProtocol">internet_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.pitPolicy">pit_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList">DataAwsccDrsReplicationConfigurationTemplatePitPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replication_configuration_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServerInstanceType">replication_server_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replication_servers_security_groups_i_ds</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaSubnetId">staging_area_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaTags">staging_area_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList">DataAwsccDrsReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer">use_dedicated_replication_server</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `associate_default_security_group`<sup>Required</sup> <a name="associate_default_security_group" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```python
associate_default_security_group: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `auto_replicate_new_disks`<sup>Required</sup> <a name="auto_replicate_new_disks" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.autoReplicateNewDisks"></a>

```python
auto_replicate_new_disks: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `bandwidth_throttling`<sup>Required</sup> <a name="bandwidth_throttling" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```python
bandwidth_throttling: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_public_ip`<sup>Required</sup> <a name="create_public_ip" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.createPublicIp"></a>

```python
create_public_ip: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `data_plane_routing`<sup>Required</sup> <a name="data_plane_routing" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```python
data_plane_routing: str
```

- *Type:* str

---

##### `default_large_staging_disk_type`<sup>Required</sup> <a name="default_large_staging_disk_type" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```python
default_large_staging_disk_type: str
```

- *Type:* str

---

##### `ebs_encryption`<sup>Required</sup> <a name="ebs_encryption" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryption"></a>

```python
ebs_encryption: str
```

- *Type:* str

---

##### `ebs_encryption_key_arn`<sup>Required</sup> <a name="ebs_encryption_key_arn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```python
ebs_encryption_key_arn: str
```

- *Type:* str

---

##### `internet_protocol`<sup>Required</sup> <a name="internet_protocol" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.internetProtocol"></a>

```python
internet_protocol: str
```

- *Type:* str

---

##### `pit_policy`<sup>Required</sup> <a name="pit_policy" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.pitPolicy"></a>

```python
pit_policy: DataAwsccDrsReplicationConfigurationTemplatePitPolicyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList">DataAwsccDrsReplicationConfigurationTemplatePitPolicyList</a>

---

##### `replication_configuration_template_id`<sup>Required</sup> <a name="replication_configuration_template_id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```python
replication_configuration_template_id: str
```

- *Type:* str

---

##### `replication_server_instance_type`<sup>Required</sup> <a name="replication_server_instance_type" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```python
replication_server_instance_type: str
```

- *Type:* str

---

##### `replication_servers_security_groups_i_ds`<sup>Required</sup> <a name="replication_servers_security_groups_i_ds" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```python
replication_servers_security_groups_i_ds: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `staging_area_subnet_id`<sup>Required</sup> <a name="staging_area_subnet_id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```python
staging_area_subnet_id: str
```

- *Type:* str

---

##### `staging_area_tags`<sup>Required</sup> <a name="staging_area_tags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```python
staging_area_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tags"></a>

```python
tags: DataAwsccDrsReplicationConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList">DataAwsccDrsReplicationConfigurationTemplateTagsList</a>

---

##### `use_dedicated_replication_server`<sup>Required</sup> <a name="use_dedicated_replication_server" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```python
use_dedicated_replication_server: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDrsReplicationConfigurationTemplateConfig <a name="DataAwsccDrsReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template#id DataAwsccDrsReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDrsReplicationConfigurationTemplatePitPolicy <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicy" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy()
```


### DataAwsccDrsReplicationConfigurationTemplateTags <a name="DataAwsccDrsReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDrsReplicationConfigurationTemplatePitPolicyList <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicyList" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration">retention_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId">rule_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy">DataAwsccDrsReplicationConfigurationTemplatePitPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_duration`<sup>Required</sup> <a name="retention_duration" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration"></a>

```python
retention_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId"></a>

```python
rule_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDrsReplicationConfigurationTemplatePitPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy">DataAwsccDrsReplicationConfigurationTemplatePitPolicy</a>

---


### DataAwsccDrsReplicationConfigurationTemplateTagsList <a name="DataAwsccDrsReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference <a name="DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_drs_replication_configuration_template

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags">DataAwsccDrsReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDrsReplicationConfigurationTemplateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags">DataAwsccDrsReplicationConfigurationTemplateTags</a>

---



