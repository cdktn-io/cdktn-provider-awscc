# `dataAwsccBedrockagentcorePaymentConnector` Submodule <a name="`dataAwsccBedrockagentcorePaymentConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcorePaymentConnector <a name="DataAwsccBedrockagentcorePaymentConnector" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_connector awscc_bedrockagentcore_payment_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_connector#id DataAwsccBedrockagentcorePaymentConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBedrockagentcorePaymentConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBedrockagentcorePaymentConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcorePaymentConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorCreatedAt">connector_created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorLastUpdatedAt">connector_last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorName">connector_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorStatus">connector_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.credentialProviderConfigurations">credential_provider_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentConnectorArn">payment_connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentConnectorId">payment_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentManagerId">payment_manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `connector_created_at`<sup>Required</sup> <a name="connector_created_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorCreatedAt"></a>

```python
connector_created_at: str
```

- *Type:* str

---

##### `connector_last_updated_at`<sup>Required</sup> <a name="connector_last_updated_at" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorLastUpdatedAt"></a>

```python
connector_last_updated_at: str
```

- *Type:* str

---

##### `connector_name`<sup>Required</sup> <a name="connector_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorName"></a>

```python
connector_name: str
```

- *Type:* str

---

##### `connector_status`<sup>Required</sup> <a name="connector_status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorStatus"></a>

```python
connector_status: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `credential_provider_configurations`<sup>Required</sup> <a name="credential_provider_configurations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.credentialProviderConfigurations"></a>

```python
credential_provider_configurations: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `payment_connector_arn`<sup>Required</sup> <a name="payment_connector_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentConnectorArn"></a>

```python
payment_connector_arn: str
```

- *Type:* str

---

##### `payment_connector_id`<sup>Required</sup> <a name="payment_connector_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentConnectorId"></a>

```python
payment_connector_id: str
```

- *Type:* str

---

##### `payment_manager_id`<sup>Required</sup> <a name="payment_manager_id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.paymentManagerId"></a>

```python
payment_manager_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcorePaymentConnectorConfig <a name="DataAwsccBedrockagentcorePaymentConnectorConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_payment_connector#id DataAwsccBedrockagentcorePaymentConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations()
```


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp()
```


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn">credential_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_provider_arn`<sup>Required</sup> <a name="credential_provider_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn"></a>

```python
credential_provider_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

---


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp">coinbase_cdp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy">stripe_privy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coinbase_cdp`<sup>Required</sup> <a name="coinbase_cdp" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp"></a>

```python
coinbase_cdp: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a>

---

##### `stripe_privy`<sup>Required</sup> <a name="stripe_privy" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy"></a>

```python
stripe_privy: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>

---


### DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference <a name="DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bedrockagentcore_payment_connector

dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn">credential_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_provider_arn`<sup>Required</sup> <a name="credential_provider_arn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn"></a>

```python
credential_provider_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcorePaymentConnector.DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">DataAwsccBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

---



