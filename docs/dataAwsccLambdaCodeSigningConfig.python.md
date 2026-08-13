# `dataAwsccLambdaCodeSigningConfig` Submodule <a name="`dataAwsccLambdaCodeSigningConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaCodeSigningConfig <a name="DataAwsccLambdaCodeSigningConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_code_signing_config awscc_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_code_signing_config#id DataAwsccLambdaCodeSigningConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLambdaCodeSigningConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLambdaCodeSigningConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLambdaCodeSigningConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLambdaCodeSigningConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_code_signing_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaCodeSigningConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.allowedPublishers">allowed_publishers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference">DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningConfigArn">code_signing_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningConfigId">code_signing_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningPolicies">code_signing_policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference">DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList">DataAwsccLambdaCodeSigningConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allowed_publishers`<sup>Required</sup> <a name="allowed_publishers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.allowedPublishers"></a>

```python
allowed_publishers: DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference">DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference</a>

---

##### `code_signing_config_arn`<sup>Required</sup> <a name="code_signing_config_arn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningConfigArn"></a>

```python
code_signing_config_arn: str
```

- *Type:* str

---

##### `code_signing_config_id`<sup>Required</sup> <a name="code_signing_config_id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningConfigId"></a>

```python
code_signing_config_id: str
```

- *Type:* str

---

##### `code_signing_policies`<sup>Required</sup> <a name="code_signing_policies" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.codeSigningPolicies"></a>

```python
code_signing_policies: DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference">DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.tags"></a>

```python
tags: DataAwsccLambdaCodeSigningConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList">DataAwsccLambdaCodeSigningConfigTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaCodeSigningConfigAllowedPublishers <a name="DataAwsccLambdaCodeSigningConfigAllowedPublishers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishers()
```


### DataAwsccLambdaCodeSigningConfigCodeSigningPolicies <a name="DataAwsccLambdaCodeSigningConfigCodeSigningPolicies" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies()
```


### DataAwsccLambdaCodeSigningConfigConfig <a name="DataAwsccLambdaCodeSigningConfigConfig" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lambda_code_signing_config#id DataAwsccLambdaCodeSigningConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaCodeSigningConfigTags <a name="DataAwsccLambdaCodeSigningConfigTags" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference <a name="DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">signing_profile_version_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishers">DataAwsccLambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signing_profile_version_arns`<sup>Required</sup> <a name="signing_profile_version_arns" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```python
signing_profile_version_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaCodeSigningConfigAllowedPublishers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigAllowedPublishers">DataAwsccLambdaCodeSigningConfigAllowedPublishers</a>

---


### DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference <a name="DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.untrustedArtifactOnDeployment">untrusted_artifact_on_deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies">DataAwsccLambdaCodeSigningConfigCodeSigningPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `untrusted_artifact_on_deployment`<sup>Required</sup> <a name="untrusted_artifact_on_deployment" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```python
untrusted_artifact_on_deployment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaCodeSigningConfigCodeSigningPolicies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigCodeSigningPolicies">DataAwsccLambdaCodeSigningConfigCodeSigningPolicies</a>

---


### DataAwsccLambdaCodeSigningConfigTagsList <a name="DataAwsccLambdaCodeSigningConfigTagsList" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLambdaCodeSigningConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLambdaCodeSigningConfigTagsOutputReference <a name="DataAwsccLambdaCodeSigningConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_code_signing_config

dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTags">DataAwsccLambdaCodeSigningConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaCodeSigningConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaCodeSigningConfig.DataAwsccLambdaCodeSigningConfigTags">DataAwsccLambdaCodeSigningConfigTags</a>

---



