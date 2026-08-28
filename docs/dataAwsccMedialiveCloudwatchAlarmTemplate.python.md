# `dataAwsccMedialiveCloudwatchAlarmTemplate` Submodule <a name="`dataAwsccMedialiveCloudwatchAlarmTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveCloudwatchAlarmTemplate <a name="DataAwsccMedialiveCloudwatchAlarmTemplate" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_cloudwatch_alarm_template awscc_medialive_cloudwatch_alarm_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_cloudwatch_alarm_template

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_cloudwatch_alarm_template#id DataAwsccMedialiveCloudwatchAlarmTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_cloudwatch_alarm_template

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_cloudwatch_alarm_template

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_cloudwatch_alarm_template

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_cloudwatch_alarm_template

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMedialiveCloudwatchAlarmTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMedialiveCloudwatchAlarmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_cloudwatch_alarm_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveCloudwatchAlarmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId">cloudwatch_alarm_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm">datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.groupIdentifier">group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.treatMissingData">treat_missing_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_alarm_template_id`<sup>Required</sup> <a name="cloudwatch_alarm_template_id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId"></a>

```python
cloudwatch_alarm_template_id: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `datapoints_to_alarm`<sup>Required</sup> <a name="datapoints_to_alarm" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm"></a>

```python
datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `group_identifier`<sup>Required</sup> <a name="group_identifier" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.groupIdentifier"></a>

```python
group_identifier: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `treat_missing_data`<sup>Required</sup> <a name="treat_missing_data" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.treatMissingData"></a>

```python
treat_missing_data: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveCloudwatchAlarmTemplateConfig <a name="DataAwsccMedialiveCloudwatchAlarmTemplateConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_medialive_cloudwatch_alarm_template

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_cloudwatch_alarm_template#id DataAwsccMedialiveCloudwatchAlarmTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



