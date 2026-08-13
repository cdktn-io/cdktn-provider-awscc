# `dataAwsccIotEncryptionConfiguration` Submodule <a name="`dataAwsccIotEncryptionConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotEncryptionConfiguration <a name="DataAwsccIotEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_encryption_configuration awscc_iot_encryption_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_encryption_configuration

dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_encryption_configuration#id DataAwsccIotEncryptionConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotEncryptionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_encryption_configuration

dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_encryption_configuration

dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_encryption_configuration

dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_encryption_configuration

dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotEncryptionConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotEncryptionConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotEncryptionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_encryption_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotEncryptionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.configurationDetails">configuration_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference">DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.kmsAccessRoleArn">kms_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.lastModifiedDate">last_modified_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `configuration_details`<sup>Required</sup> <a name="configuration_details" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.configurationDetails"></a>

```python
configuration_details: DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference">DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference</a>

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_access_role_arn`<sup>Required</sup> <a name="kms_access_role_arn" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.kmsAccessRoleArn"></a>

```python
kms_access_role_arn: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `last_modified_date`<sup>Required</sup> <a name="last_modified_date" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.lastModifiedDate"></a>

```python
last_modified_date: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotEncryptionConfigurationConfig <a name="DataAwsccIotEncryptionConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_encryption_configuration

dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iot_encryption_configuration#id DataAwsccIotEncryptionConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotEncryptionConfigurationConfigurationDetails <a name="DataAwsccIotEncryptionConfigurationConfigurationDetails" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_encryption_configuration

dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference <a name="DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_encryption_configuration

dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.configurationStatus">configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.errorCode">error_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetails">DataAwsccIotEncryptionConfigurationConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_status`<sup>Required</sup> <a name="configuration_status" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.configurationStatus"></a>

```python
configuration_status: str
```

- *Type:* str

---

##### `error_code`<sup>Required</sup> <a name="error_code" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.errorCode"></a>

```python
error_code: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotEncryptionConfigurationConfigurationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotEncryptionConfiguration.DataAwsccIotEncryptionConfigurationConfigurationDetails">DataAwsccIotEncryptionConfigurationConfigurationDetails</a>

---



