# `dataAwsccRoute53RecoverycontrolControlPanel` Submodule <a name="`dataAwsccRoute53RecoverycontrolControlPanel` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53RecoverycontrolControlPanel <a name="DataAwsccRoute53RecoverycontrolControlPanel" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53recoverycontrol_control_panel awscc_route53recoverycontrol_control_panel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_control_panel

dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53recoverycontrol_control_panel#id DataAwsccRoute53RecoverycontrolControlPanel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolControlPanel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_control_panel

dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_control_panel

dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_control_panel

dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_control_panel

dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolControlPanel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRoute53RecoverycontrolControlPanel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRoute53RecoverycontrolControlPanel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53recoverycontrol_control_panel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53RecoverycontrolControlPanel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.controlPanelArn">control_panel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.defaultControlPanel">default_control_panel</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.routingControlCount">routing_control_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList">DataAwsccRoute53RecoverycontrolControlPanelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `control_panel_arn`<sup>Required</sup> <a name="control_panel_arn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.controlPanelArn"></a>

```python
control_panel_arn: str
```

- *Type:* str

---

##### `default_control_panel`<sup>Required</sup> <a name="default_control_panel" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.defaultControlPanel"></a>

```python
default_control_panel: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `routing_control_count`<sup>Required</sup> <a name="routing_control_count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.routingControlCount"></a>

```python
routing_control_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.tags"></a>

```python
tags: DataAwsccRoute53RecoverycontrolControlPanelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList">DataAwsccRoute53RecoverycontrolControlPanelTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53RecoverycontrolControlPanelConfig <a name="DataAwsccRoute53RecoverycontrolControlPanelConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_control_panel

dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53recoverycontrol_control_panel#id DataAwsccRoute53RecoverycontrolControlPanel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53RecoverycontrolControlPanelTags <a name="DataAwsccRoute53RecoverycontrolControlPanelTags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_control_panel

dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53RecoverycontrolControlPanelTagsList <a name="DataAwsccRoute53RecoverycontrolControlPanelTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_control_panel

dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference <a name="DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_control_panel

dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTags">DataAwsccRoute53RecoverycontrolControlPanelTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53RecoverycontrolControlPanelTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolControlPanel.DataAwsccRoute53RecoverycontrolControlPanelTags">DataAwsccRoute53RecoverycontrolControlPanelTags</a>

---



