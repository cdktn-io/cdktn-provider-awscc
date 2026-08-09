# `dataAwsccSagemakerEndpoint` Submodule <a name="`dataAwsccSagemakerEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerEndpoint <a name="DataAwsccSagemakerEndpoint" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_endpoint awscc_sagemaker_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_endpoint#id DataAwsccSagemakerEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.deploymentConfig">deployment_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference">DataAwsccSagemakerEndpointDeploymentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointArn">endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointConfigName">endpoint_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.excludeRetainedVariantProperties">exclude_retained_variant_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList">DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainAllVariantProperties">retain_all_variant_properties</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainDeploymentConfig">retain_deployment_config</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList">DataAwsccSagemakerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `deployment_config`<sup>Required</sup> <a name="deployment_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.deploymentConfig"></a>

```python
deployment_config: DataAwsccSagemakerEndpointDeploymentConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference">DataAwsccSagemakerEndpointDeploymentConfigOutputReference</a>

---

##### `endpoint_arn`<sup>Required</sup> <a name="endpoint_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointArn"></a>

```python
endpoint_arn: str
```

- *Type:* str

---

##### `endpoint_config_name`<sup>Required</sup> <a name="endpoint_config_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointConfigName"></a>

```python
endpoint_config_name: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `exclude_retained_variant_properties`<sup>Required</sup> <a name="exclude_retained_variant_properties" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.excludeRetainedVariantProperties"></a>

```python
exclude_retained_variant_properties: DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList">DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList</a>

---

##### `retain_all_variant_properties`<sup>Required</sup> <a name="retain_all_variant_properties" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainAllVariantProperties"></a>

```python
retain_all_variant_properties: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `retain_deployment_config`<sup>Required</sup> <a name="retain_deployment_config" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.retainDeploymentConfig"></a>

```python
retain_deployment_config: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tags"></a>

```python
tags: DataAwsccSagemakerEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList">DataAwsccSagemakerEndpointTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerEndpointConfig <a name="DataAwsccSagemakerEndpointConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_endpoint#id DataAwsccSagemakerEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerEndpointDeploymentConfig <a name="DataAwsccSagemakerEndpointDeploymentConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig()
```


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration()
```


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms()
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy()
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration()
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize()
```


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize()
```


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy()
```


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize()
```


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize()
```


### DataAwsccSagemakerEndpointExcludeRetainedVariantProperties <a name="DataAwsccSagemakerEndpointExcludeRetainedVariantProperties" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties()
```


### DataAwsccSagemakerEndpointTags <a name="DataAwsccSagemakerEndpointTags" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName">alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_name`<sup>Required</sup> <a name="alarm_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.alarmName"></a>

```python
alarm_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms">alarms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.alarms"></a>

```python
alarms: DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfiguration</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximum_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds">termination_wait_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration">traffic_routing_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_execution_timeout_in_seconds`<sup>Required</sup> <a name="maximum_execution_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```python
maximum_execution_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `termination_wait_in_seconds`<sup>Required</sup> <a name="termination_wait_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.terminationWaitInSeconds"></a>

```python
termination_wait_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `traffic_routing_configuration`<sup>Required</sup> <a name="traffic_routing_configuration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.trafficRoutingConfiguration"></a>

```python
traffic_routing_configuration: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize">canary_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize">linear_step_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds">wait_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `canary_size`<sup>Required</sup> <a name="canary_size" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.canarySize"></a>

```python
canary_size: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference</a>

---

##### `linear_step_size`<sup>Required</sup> <a name="linear_step_size" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.linearStepSize"></a>

```python
linear_step_size: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `wait_interval_in_seconds`<sup>Required</sup> <a name="wait_interval_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.waitIntervalInSeconds"></a>

```python
wait_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration">auto_rollback_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy">blue_green_update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicy">rolling_update_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig">DataAwsccSagemakerEndpointDeploymentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_rollback_configuration`<sup>Required</sup> <a name="auto_rollback_configuration" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.autoRollbackConfiguration"></a>

```python
auto_rollback_configuration: DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference">DataAwsccSagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference</a>

---

##### `blue_green_update_policy`<sup>Required</sup> <a name="blue_green_update_policy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.blueGreenUpdatePolicy"></a>

```python
blue_green_update_policy: DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference</a>

---

##### `rolling_update_policy`<sup>Required</sup> <a name="rolling_update_policy" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.rollingUpdatePolicy"></a>

```python
rolling_update_policy: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfig">DataAwsccSagemakerEndpointDeploymentConfig</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSize</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize">maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds">maximum_execution_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize">rollback_maximum_batch_size</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds">wait_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_batch_size`<sup>Required</sup> <a name="maximum_batch_size" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumBatchSize"></a>

```python
maximum_batch_size: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyMaximumBatchSizeOutputReference</a>

---

##### `maximum_execution_timeout_in_seconds`<sup>Required</sup> <a name="maximum_execution_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.maximumExecutionTimeoutInSeconds"></a>

```python
maximum_execution_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rollback_maximum_batch_size`<sup>Required</sup> <a name="rollback_maximum_batch_size" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.rollbackMaximumBatchSize"></a>

```python
rollback_maximum_batch_size: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference</a>

---

##### `wait_interval_in_seconds`<sup>Required</sup> <a name="wait_interval_in_seconds" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.waitIntervalInSeconds"></a>

```python
wait_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicy</a>

---


### DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference <a name="DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSizeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize">DataAwsccSagemakerEndpointDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize</a>

---


### DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList <a name="DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference <a name="DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyType">variant_property_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties">DataAwsccSagemakerEndpointExcludeRetainedVariantProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `variant_property_type`<sup>Required</sup> <a name="variant_property_type" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.variantPropertyType"></a>

```python
variant_property_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointExcludeRetainedVariantProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointExcludeRetainedVariantProperties">DataAwsccSagemakerEndpointExcludeRetainedVariantProperties</a>

---


### DataAwsccSagemakerEndpointTagsList <a name="DataAwsccSagemakerEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerEndpointTagsOutputReference <a name="DataAwsccSagemakerEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_endpoint

dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags">DataAwsccSagemakerEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerEndpoint.DataAwsccSagemakerEndpointTags">DataAwsccSagemakerEndpointTags</a>

---



