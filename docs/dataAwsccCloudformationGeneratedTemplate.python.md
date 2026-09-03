# `dataAwsccCloudformationGeneratedTemplate` Submodule <a name="`dataAwsccCloudformationGeneratedTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationGeneratedTemplate <a name="DataAwsccCloudformationGeneratedTemplate" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cloudformation_generated_template awscc_cloudformation_generated_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cloudformation_generated_template#id DataAwsccCloudformationGeneratedTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudformationGeneratedTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudformationGeneratedTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cloudformation_generated_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationGeneratedTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.generatedTemplateId">generated_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.generatedTemplateName">generated_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.progress">progress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference">DataAwsccCloudformationGeneratedTemplateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.templateConfiguration">template_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference">DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.totalWarnings">total_warnings</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `generated_template_id`<sup>Required</sup> <a name="generated_template_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.generatedTemplateId"></a>

```python
generated_template_id: str
```

- *Type:* str

---

##### `generated_template_name`<sup>Required</sup> <a name="generated_template_name" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.generatedTemplateName"></a>

```python
generated_template_name: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `progress`<sup>Required</sup> <a name="progress" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.progress"></a>

```python
progress: DataAwsccCloudformationGeneratedTemplateProgressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference">DataAwsccCloudformationGeneratedTemplateProgressOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `template_configuration`<sup>Required</sup> <a name="template_configuration" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.templateConfiguration"></a>

```python
template_configuration: DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference">DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference</a>

---

##### `total_warnings`<sup>Required</sup> <a name="total_warnings" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.totalWarnings"></a>

```python
total_warnings: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationGeneratedTemplateConfig <a name="DataAwsccCloudformationGeneratedTemplateConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/cloudformation_generated_template#id DataAwsccCloudformationGeneratedTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationGeneratedTemplateProgress <a name="DataAwsccCloudformationGeneratedTemplateProgress" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress()
```


### DataAwsccCloudformationGeneratedTemplateTemplateConfiguration <a name="DataAwsccCloudformationGeneratedTemplateTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationGeneratedTemplateProgressOutputReference <a name="DataAwsccCloudformationGeneratedTemplateProgressOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed">resources_failed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending">resources_pending</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing">resources_processing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded">resources_succeeded</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress">DataAwsccCloudformationGeneratedTemplateProgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resources_failed`<sup>Required</sup> <a name="resources_failed" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed"></a>

```python
resources_failed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources_pending`<sup>Required</sup> <a name="resources_pending" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending"></a>

```python
resources_pending: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources_processing`<sup>Required</sup> <a name="resources_processing" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing"></a>

```python
resources_processing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources_succeeded`<sup>Required</sup> <a name="resources_succeeded" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded"></a>

```python
resources_succeeded: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationGeneratedTemplateProgress
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress">DataAwsccCloudformationGeneratedTemplateProgress</a>

---


### DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference <a name="DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_generated_template

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy">update_replace_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration">DataAwsccCloudformationGeneratedTemplateTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `update_replace_policy`<sup>Required</sup> <a name="update_replace_policy" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy"></a>

```python
update_replace_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationGeneratedTemplateTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration">DataAwsccCloudformationGeneratedTemplateTemplateConfiguration</a>

---



