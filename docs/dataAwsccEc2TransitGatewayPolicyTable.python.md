# `dataAwsccEc2TransitGatewayPolicyTable` Submodule <a name="`dataAwsccEc2TransitGatewayPolicyTable` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2TransitGatewayPolicyTable <a name="DataAwsccEc2TransitGatewayPolicyTable" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table awscc_ec2_transit_gateway_policy_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_policy_table

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table#id DataAwsccEc2TransitGatewayPolicyTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPolicyTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_policy_table

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_policy_table

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_policy_table

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_policy_table

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2TransitGatewayPolicyTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2TransitGatewayPolicyTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2TransitGatewayPolicyTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2TransitGatewayPolicyTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList">DataAwsccEc2TransitGatewayPolicyTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.transitGatewayPolicyTableId">transit_gateway_policy_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.tags"></a>

```python
tags: DataAwsccEc2TransitGatewayPolicyTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList">DataAwsccEc2TransitGatewayPolicyTableTagsList</a>

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `transit_gateway_policy_table_id`<sup>Required</sup> <a name="transit_gateway_policy_table_id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.transitGatewayPolicyTableId"></a>

```python
transit_gateway_policy_table_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2TransitGatewayPolicyTableConfig <a name="DataAwsccEc2TransitGatewayPolicyTableConfig" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_policy_table

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_transit_gateway_policy_table#id DataAwsccEc2TransitGatewayPolicyTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2TransitGatewayPolicyTableTags <a name="DataAwsccEc2TransitGatewayPolicyTableTags" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_policy_table

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2TransitGatewayPolicyTableTagsList <a name="DataAwsccEc2TransitGatewayPolicyTableTagsList" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_policy_table

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference <a name="DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_transit_gateway_policy_table

dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags">DataAwsccEc2TransitGatewayPolicyTableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2TransitGatewayPolicyTableTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2TransitGatewayPolicyTable.DataAwsccEc2TransitGatewayPolicyTableTags">DataAwsccEc2TransitGatewayPolicyTableTags</a>

---



