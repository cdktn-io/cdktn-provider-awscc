# `dataAwsccLambdaNetworkConnector` Submodule <a name="`dataAwsccLambdaNetworkConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaNetworkConnector <a name="DataAwsccLambdaNetworkConnector" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_network_connector awscc_lambda_network_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_network_connector#id DataAwsccLambdaNetworkConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLambdaNetworkConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLambdaNetworkConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLambdaNetworkConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLambdaNetworkConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_network_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaNetworkConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference">DataAwsccLambdaNetworkConnectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.operatorRole">operator_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList">DataAwsccLambdaNetworkConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.configuration"></a>

```python
configuration: DataAwsccLambdaNetworkConnectorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference">DataAwsccLambdaNetworkConnectorConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operator_role`<sup>Required</sup> <a name="operator_role" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.operatorRole"></a>

```python
operator_role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.tags"></a>

```python
tags: DataAwsccLambdaNetworkConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList">DataAwsccLambdaNetworkConnectorTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaNetworkConnectorConfig <a name="DataAwsccLambdaNetworkConnectorConfig" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/lambda_network_connector#id DataAwsccLambdaNetworkConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaNetworkConnectorConfiguration <a name="DataAwsccLambdaNetworkConnectorConfiguration" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfiguration()
```


### DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration <a name="DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration()
```


### DataAwsccLambdaNetworkConnectorTags <a name="DataAwsccLambdaNetworkConnectorTags" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaNetworkConnectorConfigurationOutputReference <a name="DataAwsccLambdaNetworkConnectorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.property.vpcEgressConfiguration">vpc_egress_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference">DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfiguration">DataAwsccLambdaNetworkConnectorConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_egress_configuration`<sup>Required</sup> <a name="vpc_egress_configuration" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.property.vpcEgressConfiguration"></a>

```python
vpc_egress_configuration: DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference">DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaNetworkConnectorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfiguration">DataAwsccLambdaNetworkConnectorConfiguration</a>

---


### DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference <a name="DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypes">associated_compute_resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocol">network_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration">DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_compute_resource_types`<sup>Required</sup> <a name="associated_compute_resource_types" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.associatedComputeResourceTypes"></a>

```python
associated_compute_resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_protocol`<sup>Required</sup> <a name="network_protocol" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.networkProtocol"></a>

```python
network_protocol: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration">DataAwsccLambdaNetworkConnectorConfigurationVpcEgressConfiguration</a>

---


### DataAwsccLambdaNetworkConnectorTagsList <a name="DataAwsccLambdaNetworkConnectorTagsList" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLambdaNetworkConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLambdaNetworkConnectorTagsOutputReference <a name="DataAwsccLambdaNetworkConnectorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lambda_network_connector

dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTags">DataAwsccLambdaNetworkConnectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLambdaNetworkConnectorTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaNetworkConnector.DataAwsccLambdaNetworkConnectorTags">DataAwsccLambdaNetworkConnectorTags</a>

---



