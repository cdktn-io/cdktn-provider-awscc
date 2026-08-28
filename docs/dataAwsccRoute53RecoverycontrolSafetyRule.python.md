# `dataAwsccRoute53RecoverycontrolSafetyRule` Submodule <a name="`dataAwsccRoute53RecoverycontrolSafetyRule` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53RecoverycontrolSafetyRule <a name="DataAwsccRoute53RecoverycontrolSafetyRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule#id DataAwsccRoute53RecoverycontrolSafetyRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRoute53RecoverycontrolSafetyRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRoute53RecoverycontrolSafetyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53RecoverycontrolSafetyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.assertionRule">assertion_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.controlPanelArn">control_panel_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.gatingRule">gating_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.ruleConfig">rule_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.safetyRuleArn">safety_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList">DataAwsccRoute53RecoverycontrolSafetyRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `assertion_rule`<sup>Required</sup> <a name="assertion_rule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.assertionRule"></a>

```python
assertion_rule: DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a>

---

##### `control_panel_arn`<sup>Required</sup> <a name="control_panel_arn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.controlPanelArn"></a>

```python
control_panel_arn: str
```

- *Type:* str

---

##### `gating_rule`<sup>Required</sup> <a name="gating_rule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.gatingRule"></a>

```python
gating_rule: DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule_config`<sup>Required</sup> <a name="rule_config" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.ruleConfig"></a>

```python
rule_config: DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference</a>

---

##### `safety_rule_arn`<sup>Required</sup> <a name="safety_rule_arn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.safetyRuleArn"></a>

```python
safety_rule_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tags"></a>

```python
tags: DataAwsccRoute53RecoverycontrolSafetyRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList">DataAwsccRoute53RecoverycontrolSafetyRuleTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule <a name="DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule()
```


### DataAwsccRoute53RecoverycontrolSafetyRuleConfig <a name="DataAwsccRoute53RecoverycontrolSafetyRuleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule#id DataAwsccRoute53RecoverycontrolSafetyRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule <a name="DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule()
```


### DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig <a name="DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig()
```


### DataAwsccRoute53RecoverycontrolSafetyRuleTags <a name="DataAwsccRoute53RecoverycontrolSafetyRuleTags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls">asserted_controls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs">wait_period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asserted_controls`<sup>Required</sup> <a name="asserted_controls" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls"></a>

```python
asserted_controls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_period_ms`<sup>Required</sup> <a name="wait_period_ms" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs"></a>

```python
wait_period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule</a>

---


### DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls">gating_controls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls">target_controls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs">wait_period_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gating_controls`<sup>Required</sup> <a name="gating_controls" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls"></a>

```python
gating_controls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_controls`<sup>Required</sup> <a name="target_controls" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls"></a>

```python
target_controls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `wait_period_ms`<sup>Required</sup> <a name="wait_period_ms" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs"></a>

```python
wait_period_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule</a>

---


### DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted">inverted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```python
inverted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig</a>

---


### DataAwsccRoute53RecoverycontrolSafetyRuleTagsList <a name="DataAwsccRoute53RecoverycontrolSafetyRuleTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_route53_recoverycontrol_safety_rule

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags">DataAwsccRoute53RecoverycontrolSafetyRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRoute53RecoverycontrolSafetyRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags">DataAwsccRoute53RecoverycontrolSafetyRuleTags</a>

---



