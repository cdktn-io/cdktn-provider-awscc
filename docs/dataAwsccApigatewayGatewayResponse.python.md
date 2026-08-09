# `dataAwsccApigatewayGatewayResponse` Submodule <a name="`dataAwsccApigatewayGatewayResponse` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayGatewayResponse <a name="DataAwsccApigatewayGatewayResponse" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_gateway_response awscc_apigateway_gateway_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_gateway_response

dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_gateway_response#id DataAwsccApigatewayGatewayResponse#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayGatewayResponse resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_gateway_response

dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_gateway_response

dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_gateway_response

dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_gateway_response

dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApigatewayGatewayResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApigatewayGatewayResponse to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApigatewayGatewayResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_gateway_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayGatewayResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.gatewayResponseId">gateway_response_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.responseParameters">response_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.responseTemplates">response_templates</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.responseType">response_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `gateway_response_id`<sup>Required</sup> <a name="gateway_response_id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.gatewayResponseId"></a>

```python
gateway_response_id: str
```

- *Type:* str

---

##### `response_parameters`<sup>Required</sup> <a name="response_parameters" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.responseParameters"></a>

```python
response_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `response_templates`<sup>Required</sup> <a name="response_templates" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.responseTemplates"></a>

```python
response_templates: StringMap
```

- *Type:* cdktn.StringMap

---

##### `response_type`<sup>Required</sup> <a name="response_type" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.responseType"></a>

```python
response_type: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayGatewayResponseConfig <a name="DataAwsccApigatewayGatewayResponseConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apigateway_gateway_response

dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayGatewayResponse.DataAwsccApigatewayGatewayResponseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_gateway_response#id DataAwsccApigatewayGatewayResponse#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



