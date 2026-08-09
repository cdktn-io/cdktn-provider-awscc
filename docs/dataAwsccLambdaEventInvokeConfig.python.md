# `dataAwsccLambdaEventInvokeConfig` Submodule <a name="`dataAwsccLambdaEventInvokeConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaEventInvokeConfig <a name="DataAwsccLambdaEventInvokeConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_event_invoke_config awscc_lambda_event_invoke_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_event_invoke_config#id DataAwsccLambdaEventInvokeConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLambdaEventInvokeConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLambdaEventInvokeConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_event_invoke_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaEventInvokeConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.destinationConfig">destination_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.maximumEventAgeInSeconds">maximum_event_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.maximumRetryAttempts">maximum_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `destination_config`<sup>Required</sup> <a name="destination_config" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.destinationConfig"></a>

```python
destination_config: DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference</a>

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `maximum_event_age_in_seconds`<sup>Required</sup> <a name="maximum_event_age_in_seconds" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

```python
maximum_event_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_retry_attempts`<sup>Required</sup> <a name="maximum_retry_attempts" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.maximumRetryAttempts"></a>

```python
maximum_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaEventInvokeConfigConfig <a name="DataAwsccLambdaEventInvokeConfigConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_event_invoke_config#id DataAwsccLambdaEventInvokeConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaEventInvokeConfigDestinationConfig <a name="DataAwsccLambdaEventInvokeConfigDestinationConfig" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig()
```


### DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure()
```


### DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure">DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure">DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailure</a>

---


### DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess">DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess">DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---


### DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference <a name="DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_event_invoke_config

dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure">on_failure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess">on_success</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig">DataAwsccLambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_failure`<sup>Required</sup> <a name="on_failure" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure"></a>

```python
on_failure: DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a>

---

##### `on_success`<sup>Required</sup> <a name="on_success" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess"></a>

```python
on_success: DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">DataAwsccLambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaEventInvokeConfigDestinationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaEventInvokeConfig.DataAwsccLambdaEventInvokeConfigDestinationConfig">DataAwsccLambdaEventInvokeConfigDestinationConfig</a>

---



