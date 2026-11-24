# `dataAwsccLambdaRuntimeAlias` Submodule <a name="`dataAwsccLambdaRuntimeAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaRuntimeAlias <a name="DataAwsccLambdaRuntimeAlias" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias awscc_lambda_runtime_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias#id DataAwsccLambdaRuntimeAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLambdaRuntimeAlias resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLambdaRuntimeAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLambdaRuntimeAlias to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLambdaRuntimeAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaRuntimeAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.compatibility">compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference">DataAwsccLambdaRuntimeAliasCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.releaseLifecycle">release_lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference">DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeName">runtime_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersionArn">runtime_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.compatibility"></a>

```python
compatibility: DataAwsccLambdaRuntimeAliasCompatibilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference">DataAwsccLambdaRuntimeAliasCompatibilityOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `release_lifecycle`<sup>Required</sup> <a name="release_lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.releaseLifecycle"></a>

```python
release_lifecycle: DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference">DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference</a>

---

##### `runtime_name`<sup>Required</sup> <a name="runtime_name" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeName"></a>

```python
runtime_name: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `runtime_version_arn`<sup>Required</sup> <a name="runtime_version_arn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.runtimeVersionArn"></a>

```python
runtime_version_arn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaRuntimeAliasCompatibility <a name="DataAwsccLambdaRuntimeAliasCompatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility()
```


### DataAwsccLambdaRuntimeAliasConfig <a name="DataAwsccLambdaRuntimeAliasConfig" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_alias#id DataAwsccLambdaRuntimeAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaRuntimeAliasReleaseLifecycle <a name="DataAwsccLambdaRuntimeAliasReleaseLifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaRuntimeAliasCompatibilityOutputReference <a name="DataAwsccLambdaRuntimeAliasCompatibilityOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels">integration_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances">managed_instances</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility">DataAwsccLambdaRuntimeAliasCompatibility</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `integration_models`<sup>Required</sup> <a name="integration_models" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.integrationModels"></a>

```python
integration_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_instances`<sup>Required</sup> <a name="managed_instances" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.managedInstances"></a>

```python
managed_instances: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibilityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaRuntimeAliasCompatibility
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasCompatibility">DataAwsccLambdaRuntimeAliasCompatibility</a>

---


### DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference <a name="DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_runtime_alias

dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate">deprecation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate">function_create_block_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate">function_update_block_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState">release_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle">DataAwsccLambdaRuntimeAliasReleaseLifecycle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deprecation_date`<sup>Required</sup> <a name="deprecation_date" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.deprecationDate"></a>

```python
deprecation_date: str
```

- *Type:* str

---

##### `function_create_block_date`<sup>Required</sup> <a name="function_create_block_date" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionCreateBlockDate"></a>

```python
function_create_block_date: str
```

- *Type:* str

---

##### `function_update_block_date`<sup>Required</sup> <a name="function_update_block_date" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.functionUpdateBlockDate"></a>

```python
function_update_block_date: str
```

- *Type:* str

---

##### `release_state`<sup>Required</sup> <a name="release_state" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.releaseState"></a>

```python
release_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaRuntimeAliasReleaseLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeAlias.DataAwsccLambdaRuntimeAliasReleaseLifecycle">DataAwsccLambdaRuntimeAliasReleaseLifecycle</a>

---



