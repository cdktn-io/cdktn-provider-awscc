# `dataAwsccBcmpricingcalculatorBillEstimate` Submodule <a name="`dataAwsccBcmpricingcalculatorBillEstimate` Submodule" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBcmpricingcalculatorBillEstimate <a name="DataAwsccBcmpricingcalculatorBillEstimate" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/bcmpricingcalculator_bill_estimate awscc_bcmpricingcalculator_bill_estimate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/bcmpricingcalculator_bill_estimate#id DataAwsccBcmpricingcalculatorBillEstimate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBcmpricingcalculatorBillEstimate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBcmpricingcalculatorBillEstimate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/bcmpricingcalculator_bill_estimate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBcmpricingcalculatorBillEstimate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billEstimateId">bill_estimate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billInterval">bill_interval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference">DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billScenarioId">bill_scenario_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn">cost_category_group_sharing_preference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate">cost_category_group_sharing_preference_effective_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.groupSharingPreference">group_sharing_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList">DataAwsccBcmpricingcalculatorBillEstimateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bill_estimate_id`<sup>Required</sup> <a name="bill_estimate_id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billEstimateId"></a>

```python
bill_estimate_id: str
```

- *Type:* str

---

##### `bill_interval`<sup>Required</sup> <a name="bill_interval" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billInterval"></a>

```python
bill_interval: DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference">DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference</a>

---

##### `bill_scenario_id`<sup>Required</sup> <a name="bill_scenario_id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billScenarioId"></a>

```python
bill_scenario_id: str
```

- *Type:* str

---

##### `cost_category_group_sharing_preference_arn`<sup>Required</sup> <a name="cost_category_group_sharing_preference_arn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn"></a>

```python
cost_category_group_sharing_preference_arn: str
```

- *Type:* str

---

##### `cost_category_group_sharing_preference_effective_date`<sup>Required</sup> <a name="cost_category_group_sharing_preference_effective_date" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate"></a>

```python
cost_category_group_sharing_preference_effective_date: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `group_sharing_preference`<sup>Required</sup> <a name="group_sharing_preference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.groupSharingPreference"></a>

```python
group_sharing_preference: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.tags"></a>

```python
tags: DataAwsccBcmpricingcalculatorBillEstimateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList">DataAwsccBcmpricingcalculatorBillEstimateTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBcmpricingcalculatorBillEstimateBillInterval <a name="DataAwsccBcmpricingcalculatorBillEstimateBillInterval" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillInterval.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillInterval()
```


### DataAwsccBcmpricingcalculatorBillEstimateConfig <a name="DataAwsccBcmpricingcalculatorBillEstimateConfig" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/bcmpricingcalculator_bill_estimate#id DataAwsccBcmpricingcalculatorBillEstimate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBcmpricingcalculatorBillEstimateTags <a name="DataAwsccBcmpricingcalculatorBillEstimateTags" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference <a name="DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillInterval">DataAwsccBcmpricingcalculatorBillEstimateBillInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmpricingcalculatorBillEstimateBillInterval
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillInterval">DataAwsccBcmpricingcalculatorBillEstimateBillInterval</a>

---


### DataAwsccBcmpricingcalculatorBillEstimateTagsList <a name="DataAwsccBcmpricingcalculatorBillEstimateTagsList" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference <a name="DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_bcmpricingcalculator_bill_estimate

dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTags">DataAwsccBcmpricingcalculatorBillEstimateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBcmpricingcalculatorBillEstimateTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTags">DataAwsccBcmpricingcalculatorBillEstimateTags</a>

---



