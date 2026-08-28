# `dataAwsccCognitoLogDeliveryConfiguration` Submodule <a name="`dataAwsccCognitoLogDeliveryConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoLogDeliveryConfiguration <a name="DataAwsccCognitoLogDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_log_delivery_configuration awscc_cognito_log_delivery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_log_delivery_configuration#id DataAwsccCognitoLogDeliveryConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCognitoLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCognitoLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCognitoLogDeliveryConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCognitoLogDeliveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_log_delivery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoLogDeliveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.logConfigurations">log_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.logDeliveryConfigurationId">log_delivery_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `log_configurations`<sup>Required</sup> <a name="log_configurations" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.logConfigurations"></a>

```python
log_configurations: DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList</a>

---

##### `log_delivery_configuration_id`<sup>Required</sup> <a name="log_delivery_configuration_id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.logDeliveryConfigurationId"></a>

```python
log_delivery_configuration_id: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoLogDeliveryConfigurationConfig <a name="DataAwsccCognitoLogDeliveryConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_log_delivery_configuration#id DataAwsccCognitoLogDeliveryConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoLogDeliveryConfigurationLogConfigurations <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurations" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations()
```


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration()
```


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration()
```


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a>

---


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a>

---


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfiguration">cloudwatch_logs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource">event_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration">firehose_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations">DataAwsccCognitoLogDeliveryConfigurationLogConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs_configuration`<sup>Required</sup> <a name="cloudwatch_logs_configuration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfiguration"></a>

```python
cloudwatch_logs_configuration: DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference</a>

---

##### `event_source`<sup>Required</sup> <a name="event_source" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource"></a>

```python
event_source: str
```

- *Type:* str

---

##### `firehose_configuration`<sup>Required</sup> <a name="firehose_configuration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration"></a>

```python
firehose_configuration: DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference</a>

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration"></a>

```python
s3_configuration: DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoLogDeliveryConfigurationLogConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurations">DataAwsccCognitoLogDeliveryConfigurationLogConfigurations</a>

---


### DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference <a name="DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cognito_log_delivery_configuration

dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn">bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_arn`<sup>Required</sup> <a name="bucket_arn" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn"></a>

```python
bucket_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoLogDeliveryConfiguration.DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">DataAwsccCognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a>

---



