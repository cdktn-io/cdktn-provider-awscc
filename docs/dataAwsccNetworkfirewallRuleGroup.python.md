# `dataAwsccNetworkfirewallRuleGroup` Submodule <a name="`dataAwsccNetworkfirewallRuleGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallRuleGroup <a name="DataAwsccNetworkfirewallRuleGroup" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_rule_group awscc_networkfirewall_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_rule_group#id DataAwsccNetworkfirewallRuleGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallRuleGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNetworkfirewallRuleGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNetworkfirewallRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroup">rule_group</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupArn">rule_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupId">rule_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupName">rule_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.summaryConfiguration">summary_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference">DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList">DataAwsccNetworkfirewallRuleGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `rule_group`<sup>Required</sup> <a name="rule_group" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroup"></a>

```python
rule_group: DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference</a>

---

##### `rule_group_arn`<sup>Required</sup> <a name="rule_group_arn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupArn"></a>

```python
rule_group_arn: str
```

- *Type:* str

---

##### `rule_group_id`<sup>Required</sup> <a name="rule_group_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupId"></a>

```python
rule_group_id: str
```

- *Type:* str

---

##### `rule_group_name`<sup>Required</sup> <a name="rule_group_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.ruleGroupName"></a>

```python
rule_group_name: str
```

- *Type:* str

---

##### `summary_configuration`<sup>Required</sup> <a name="summary_configuration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.summaryConfiguration"></a>

```python
summary_configuration: DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference">DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.tags"></a>

```python
tags: DataAwsccNetworkfirewallRuleGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList">DataAwsccNetworkfirewallRuleGroupTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallRuleGroupConfig <a name="DataAwsccNetworkfirewallRuleGroupConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_rule_group#id DataAwsccNetworkfirewallRuleGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallRuleGroupRuleGroup <a name="DataAwsccNetworkfirewallRuleGroupRuleGroup" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets()
```


### DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions()
```


### DataAwsccNetworkfirewallRuleGroupSummaryConfiguration <a name="DataAwsccNetworkfirewallRuleGroupSummaryConfiguration" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration()
```


### DataAwsccNetworkfirewallRuleGroupTags <a name="DataAwsccNetworkfirewallRuleGroupTags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.referenceSets">reference_sets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.rulesSource">rules_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.ruleVariables">rule_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.statefulRuleOptions">stateful_rule_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup">DataAwsccNetworkfirewallRuleGroupRuleGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reference_sets`<sup>Required</sup> <a name="reference_sets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.referenceSets"></a>

```python
reference_sets: DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference</a>

---

##### `rules_source`<sup>Required</sup> <a name="rules_source" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.rulesSource"></a>

```python
rules_source: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference</a>

---

##### `rule_variables`<sup>Required</sup> <a name="rule_variables" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.ruleVariables"></a>

```python
rule_variables: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference</a>

---

##### `stateful_rule_options`<sup>Required</sup> <a name="stateful_rule_options" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.statefulRuleOptions"></a>

```python
stateful_rule_options: DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroup">DataAwsccNetworkfirewallRuleGroupRuleGroup</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.referenceArn">reference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reference_arn`<sup>Required</sup> <a name="reference_arn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.referenceArn"></a>

```python
reference_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.ipSetReferences">ip_set_references</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_set_references`<sup>Required</sup> <a name="ip_set_references" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.ipSetReferences"></a>

```python
ip_set_references: DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesMap</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets">DataAwsccNetworkfirewallRuleGroupRuleGroupReferenceSets</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesSourceList">rules_source_list</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesString">rules_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statefulRules">stateful_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statelessRulesAndCustomActions">stateless_rules_and_custom_actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules_source_list`<sup>Required</sup> <a name="rules_source_list" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesSourceList"></a>

```python
rules_source_list: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference</a>

---

##### `rules_string`<sup>Required</sup> <a name="rules_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.rulesString"></a>

```python
rules_string: str
```

- *Type:* str

---

##### `stateful_rules`<sup>Required</sup> <a name="stateful_rules" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statefulRules"></a>

```python
stateful_rules: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList</a>

---

##### `stateless_rules_and_custom_actions`<sup>Required</sup> <a name="stateless_rules_and_custom_actions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.statelessRulesAndCustomActions"></a>

```python
stateless_rules_and_custom_actions: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSource</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.generatedRulesType">generated_rules_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targets">targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetTypes">target_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generated_rules_type`<sup>Required</sup> <a name="generated_rules_type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.generatedRulesType"></a>

```python
generated_rules_type: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targets"></a>

```python
targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_types`<sup>Required</sup> <a name="target_types" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.targetTypes"></a>

```python
target_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationPort">destination_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourcePort">source_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.destinationPort"></a>

```python
destination_port: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_port`<sup>Required</sup> <a name="source_port" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.sourcePort"></a>

```python
source_port: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeader</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.ruleOptions">rule_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.header"></a>

```python
header: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesHeaderOutputReference</a>

---

##### `rule_options`<sup>Required</sup> <a name="rule_options" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.ruleOptions"></a>

```python
rule_options: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRules</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.keyword">keyword</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.settings">settings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keyword`<sup>Required</sup> <a name="keyword" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.keyword"></a>

```python
keyword: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.settings"></a>

```python
settings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRulesRuleOptions</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.publishMetricAction">publish_metric_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `publish_metric_action`<sup>Required</sup> <a name="publish_metric_action" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.publishMetricAction"></a>

```python
publish_metric_action: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinition</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensions</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions"></a>

```python
dimensions: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionDimensionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionPublishMetricAction</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionDefinition">action_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_definition`<sup>Required</sup> <a name="action_definition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionDefinition"></a>

```python
action_definition: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsActionDefinitionOutputReference</a>

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActions</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.customActions">custom_actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.statelessRules">stateless_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_actions`<sup>Required</sup> <a name="custom_actions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.customActions"></a>

```python
custom_actions: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionsList</a>

---

##### `stateless_rules`<sup>Required</sup> <a name="stateless_rules" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.statelessRules"></a>

```python
stateless_rules: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.ruleDefinition">rule_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_definition`<sup>Required</sup> <a name="rule_definition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.ruleDefinition"></a>

```python
rule_definition: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRules</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPorts</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.addressDefinition">address_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_definition`<sup>Required</sup> <a name="address_definition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.addressDefinition"></a>

```python
address_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinations</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationPorts">destination_ports</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.protocols">protocols</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcePorts">source_ports</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.tcpFlags">tcp_flags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_ports`<sup>Required</sup> <a name="destination_ports" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinationPorts"></a>

```python
destination_ports: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationPortsList</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.destinations"></a>

```python
destinations: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesDestinationsList</a>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.protocols"></a>

```python
protocols: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `source_ports`<sup>Required</sup> <a name="source_ports" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sourcePorts"></a>

```python
source_ports: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.sources"></a>

```python
sources: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList</a>

---

##### `tcp_flags`<sup>Required</sup> <a name="tcp_flags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.tcpFlags"></a>

```python
tcp_flags: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributes</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePortsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcePorts</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.addressDefinition">address_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_definition`<sup>Required</sup> <a name="address_definition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.addressDefinition"></a>

```python
address_definition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesSources</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.flags">flags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.masks">masks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flags`<sup>Required</sup> <a name="flags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.flags"></a>

```python
flags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `masks`<sup>Required</sup> <a name="masks" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.masks"></a>

```python
masks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesTcpFlags</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.matchAttributes">match_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `match_attributes`<sup>Required</sup> <a name="match_attributes" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.matchAttributes"></a>

```python
match_attributes: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionMatchAttributesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition">DataAwsccNetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRulesRuleDefinition</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.definition">definition</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.definition"></a>

```python
definition: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.ipSets">ip_sets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.portSets">port_sets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_sets`<sup>Required</sup> <a name="ip_sets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.ipSets"></a>

```python
ip_sets: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsMap</a>

---

##### `port_sets`<sup>Required</sup> <a name="port_sets" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.portSets"></a>

```python
port_sets: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariables</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.definition">definition</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.definition"></a>

```python
definition: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets">DataAwsccNetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets</a>

---


### DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.ruleOrder">rule_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions">DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_order`<sup>Required</sup> <a name="rule_order" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.ruleOrder"></a>

```python
rule_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions">DataAwsccNetworkfirewallRuleGroupRuleGroupStatefulRuleOptions</a>

---


### DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference <a name="DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.ruleOptions">rule_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration">DataAwsccNetworkfirewallRuleGroupSummaryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_options`<sup>Required</sup> <a name="rule_options" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.ruleOptions"></a>

```python
rule_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupSummaryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupSummaryConfiguration">DataAwsccNetworkfirewallRuleGroupSummaryConfiguration</a>

---


### DataAwsccNetworkfirewallRuleGroupTagsList <a name="DataAwsccNetworkfirewallRuleGroupTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallRuleGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallRuleGroupTagsOutputReference <a name="DataAwsccNetworkfirewallRuleGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_rule_group

dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags">DataAwsccNetworkfirewallRuleGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallRuleGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallRuleGroup.DataAwsccNetworkfirewallRuleGroupTags">DataAwsccNetworkfirewallRuleGroupTags</a>

---



