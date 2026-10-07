# `dataAwsccLambdaWebFunctionRevision` Submodule <a name="`dataAwsccLambdaWebFunctionRevision` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaWebFunctionRevision <a name="DataAwsccLambdaWebFunctionRevision" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision awscc_lambda_web_function_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision#id DataAwsccLambdaWebFunctionRevision#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLambdaWebFunctionRevision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLambdaWebFunctionRevision to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLambdaWebFunctionRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaWebFunctionRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.buildConfig">build_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionArn">revision_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionId">revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.serviceConfig">service_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.stateReason">state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `build_config`<sup>Required</sup> <a name="build_config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.buildConfig"></a>

```python
build_config: DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `revision_arn`<sup>Required</sup> <a name="revision_arn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionArn"></a>

```python
revision_arn: str
```

- *Type:* str

---

##### `revision_id`<sup>Required</sup> <a name="revision_id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.revisionId"></a>

```python
revision_id: str
```

- *Type:* str

---

##### `service_config`<sup>Required</sup> <a name="service_config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.serviceConfig"></a>

```python
service_config: DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_reason`<sup>Required</sup> <a name="state_reason" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.stateReason"></a>

```python
state_reason: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevision.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaWebFunctionRevisionBuildConfig <a name="DataAwsccLambdaWebFunctionRevisionBuildConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig()
```


### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig()
```


### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object()
```


### DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig()
```


### DataAwsccLambdaWebFunctionRevisionConfig <a name="DataAwsccLambdaWebFunctionRevisionConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/lambda_web_function_revision#id DataAwsccLambdaWebFunctionRevision#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaWebFunctionRevisionServiceConfig <a name="DataAwsccLambdaWebFunctionRevisionServiceConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig()
```


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig()
```


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object">s3_object</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_object`<sup>Required</sup> <a name="s3_object" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.s3Object"></a>

```python
s3_object: DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3ObjectOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigS3Object</a>

---


### DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig">code_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig">runtime_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig">DataAwsccLambdaWebFunctionRevisionBuildConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_config`<sup>Required</sup> <a name="code_config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.codeConfig"></a>

```python
code_config: DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigCodeConfigOutputReference</a>

---

##### `runtime_config`<sup>Required</sup> <a name="runtime_config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.runtimeConfig"></a>

```python
runtime_config: DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaWebFunctionRevisionBuildConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfig">DataAwsccLambdaWebFunctionRevisionBuildConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig">DataAwsccLambdaWebFunctionRevisionBuildConfigRuntimeConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment">max_concurrency_per_environment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig">telemetry_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig">DataAwsccLambdaWebFunctionRevisionServiceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `max_concurrency_per_environment`<sup>Required</sup> <a name="max_concurrency_per_environment" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.maxConcurrencyPerEnvironment"></a>

```python
max_concurrency_per_environment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `telemetry_config`<sup>Required</sup> <a name="telemetry_config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.telemetryConfig"></a>

```python
telemetry_config: DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference</a>

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaWebFunctionRevisionServiceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfig">DataAwsccLambdaWebFunctionRevisionServiceConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel">application_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_log_level`<sup>Required</sup> <a name="application_log_level" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.applicationLogLevel"></a>

```python
application_log_level: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `system_log_level`<sup>Required</sup> <a name="system_log_level" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfig</a>

---


### DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference <a name="DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_web_function_revision

dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.loggingConfig"></a>

```python
logging_config: DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigLoggingConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaWebFunctionRevision.DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig">DataAwsccLambdaWebFunctionRevisionServiceConfigTelemetryConfig</a>

---



