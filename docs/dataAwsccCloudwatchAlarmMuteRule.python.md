# `dataAwsccCloudwatchAlarmMuteRule` Submodule <a name="`dataAwsccCloudwatchAlarmMuteRule` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchAlarmMuteRule <a name="DataAwsccCloudwatchAlarmMuteRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_alarm_mute_rule awscc_cloudwatch_alarm_mute_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_alarm_mute_rule#id DataAwsccCloudwatchAlarmMuteRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudwatchAlarmMuteRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudwatchAlarmMuteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchAlarmMuteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.expireDate">expire_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteTargets">mute_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference">DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteType">mute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList">DataAwsccCloudwatchAlarmMuteRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expire_date`<sup>Required</sup> <a name="expire_date" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.expireDate"></a>

```python
expire_date: str
```

- *Type:* str

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `mute_targets`<sup>Required</sup> <a name="mute_targets" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteTargets"></a>

```python
mute_targets: DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference">DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference</a>

---

##### `mute_type`<sup>Required</sup> <a name="mute_type" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.muteType"></a>

```python
mute_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.rule"></a>

```python
rule: DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference</a>

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tags"></a>

```python
tags: DataAwsccCloudwatchAlarmMuteRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList">DataAwsccCloudwatchAlarmMuteRuleTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchAlarmMuteRuleConfig <a name="DataAwsccCloudwatchAlarmMuteRuleConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudwatch_alarm_mute_rule#id DataAwsccCloudwatchAlarmMuteRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchAlarmMuteRuleMuteTargets <a name="DataAwsccCloudwatchAlarmMuteRuleMuteTargets" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets()
```


### DataAwsccCloudwatchAlarmMuteRuleRule <a name="DataAwsccCloudwatchAlarmMuteRuleRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule()
```


### DataAwsccCloudwatchAlarmMuteRuleRuleSchedule <a name="DataAwsccCloudwatchAlarmMuteRuleRuleSchedule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule()
```


### DataAwsccCloudwatchAlarmMuteRuleTags <a name="DataAwsccCloudwatchAlarmMuteRuleTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames">alarm_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets">DataAwsccCloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alarm_names`<sup>Required</sup> <a name="alarm_names" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames"></a>

```python
alarm_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudwatchAlarmMuteRuleMuteTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleMuteTargets">DataAwsccCloudwatchAlarmMuteRuleMuteTargets</a>

---


### DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule">DataAwsccCloudwatchAlarmMuteRuleRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.schedule"></a>

```python
schedule: DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference">DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudwatchAlarmMuteRuleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRule">DataAwsccCloudwatchAlarmMuteRuleRule</a>

---


### DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule">DataAwsccCloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudwatchAlarmMuteRuleRuleSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleRuleSchedule">DataAwsccCloudwatchAlarmMuteRuleRuleSchedule</a>

---


### DataAwsccCloudwatchAlarmMuteRuleTagsList <a name="DataAwsccCloudwatchAlarmMuteRuleTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference <a name="DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudwatch_alarm_mute_rule

dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags">DataAwsccCloudwatchAlarmMuteRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudwatchAlarmMuteRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlarmMuteRule.DataAwsccCloudwatchAlarmMuteRuleTags">DataAwsccCloudwatchAlarmMuteRuleTags</a>

---



