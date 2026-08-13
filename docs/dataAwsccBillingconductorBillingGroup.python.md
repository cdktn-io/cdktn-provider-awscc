# `dataAwsccBillingconductorBillingGroup` Submodule <a name="`dataAwsccBillingconductorBillingGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBillingconductorBillingGroup <a name="DataAwsccBillingconductorBillingGroup" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_billing_group awscc_billingconductor_billing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_billing_group#id DataAwsccBillingconductorBillingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccBillingconductorBillingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccBillingconductorBillingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccBillingconductorBillingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccBillingconductorBillingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_billing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBillingconductorBillingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.accountGrouping">account_grouping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference">DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.computationPreference">computation_preference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference">DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.primaryAccountId">primary_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList">DataAwsccBillingconductorBillingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `account_grouping`<sup>Required</sup> <a name="account_grouping" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.accountGrouping"></a>

```python
account_grouping: DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference">DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `computation_preference`<sup>Required</sup> <a name="computation_preference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.computationPreference"></a>

```python
computation_preference: DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference">DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_account_id`<sup>Required</sup> <a name="primary_account_id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.primaryAccountId"></a>

```python
primary_account_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.tags"></a>

```python
tags: DataAwsccBillingconductorBillingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList">DataAwsccBillingconductorBillingGroupTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBillingconductorBillingGroupAccountGrouping <a name="DataAwsccBillingconductorBillingGroupAccountGrouping" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGrouping.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGrouping()
```


### DataAwsccBillingconductorBillingGroupComputationPreference <a name="DataAwsccBillingconductorBillingGroupComputationPreference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreference()
```


### DataAwsccBillingconductorBillingGroupConfig <a name="DataAwsccBillingconductorBillingGroupConfig" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_billing_group#id DataAwsccBillingconductorBillingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBillingconductorBillingGroupTags <a name="DataAwsccBillingconductorBillingGroupTags" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference <a name="DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate">auto_associate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds">linked_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn">responsibility_transfer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGrouping">DataAwsccBillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_associate`<sup>Required</sup> <a name="auto_associate" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate"></a>

```python
auto_associate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `linked_account_ids`<sup>Required</sup> <a name="linked_account_ids" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds"></a>

```python
linked_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `responsibility_transfer_arn`<sup>Required</sup> <a name="responsibility_transfer_arn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn"></a>

```python
responsibility_transfer_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBillingconductorBillingGroupAccountGrouping
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupAccountGrouping">DataAwsccBillingconductorBillingGroupAccountGrouping</a>

---


### DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference <a name="DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn">pricing_plan_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreference">DataAwsccBillingconductorBillingGroupComputationPreference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pricing_plan_arn`<sup>Required</sup> <a name="pricing_plan_arn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn"></a>

```python
pricing_plan_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBillingconductorBillingGroupComputationPreference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupComputationPreference">DataAwsccBillingconductorBillingGroupComputationPreference</a>

---


### DataAwsccBillingconductorBillingGroupTagsList <a name="DataAwsccBillingconductorBillingGroupTagsList" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccBillingconductorBillingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccBillingconductorBillingGroupTagsOutputReference <a name="DataAwsccBillingconductorBillingGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_billingconductor_billing_group

dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTags">DataAwsccBillingconductorBillingGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccBillingconductorBillingGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorBillingGroup.DataAwsccBillingconductorBillingGroupTags">DataAwsccBillingconductorBillingGroupTags</a>

---



