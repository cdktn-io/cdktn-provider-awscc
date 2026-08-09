# `dataAwsccAutoscalingScalingPolicy` Submodule <a name="`dataAwsccAutoscalingScalingPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAutoscalingScalingPolicy <a name="DataAwsccAutoscalingScalingPolicy" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_scaling_policy awscc_autoscaling_scaling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_scaling_policy#id DataAwsccAutoscalingScalingPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAutoscalingScalingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAutoscalingScalingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAutoscalingScalingPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAutoscalingScalingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_scaling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAutoscalingScalingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.adjustmentType">adjustment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.autoScalingGroupName">auto_scaling_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.cooldown">cooldown</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.estimatedInstanceWarmup">estimated_instance_warmup</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.metricAggregationType">metric_aggregation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.minAdjustmentMagnitude">min_adjustment_magnitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.predictiveScalingConfiguration">predictive_scaling_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.scalingAdjustment">scaling_adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.stepAdjustments">step_adjustments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList">DataAwsccAutoscalingScalingPolicyStepAdjustmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.targetTrackingConfiguration">target_tracking_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `adjustment_type`<sup>Required</sup> <a name="adjustment_type" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.adjustmentType"></a>

```python
adjustment_type: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_scaling_group_name`<sup>Required</sup> <a name="auto_scaling_group_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.autoScalingGroupName"></a>

```python
auto_scaling_group_name: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.cooldown"></a>

```python
cooldown: str
```

- *Type:* str

---

##### `estimated_instance_warmup`<sup>Required</sup> <a name="estimated_instance_warmup" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.estimatedInstanceWarmup"></a>

```python
estimated_instance_warmup: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_aggregation_type`<sup>Required</sup> <a name="metric_aggregation_type" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.metricAggregationType"></a>

```python
metric_aggregation_type: str
```

- *Type:* str

---

##### `min_adjustment_magnitude`<sup>Required</sup> <a name="min_adjustment_magnitude" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.minAdjustmentMagnitude"></a>

```python
min_adjustment_magnitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `predictive_scaling_configuration`<sup>Required</sup> <a name="predictive_scaling_configuration" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.predictiveScalingConfiguration"></a>

```python
predictive_scaling_configuration: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference</a>

---

##### `scaling_adjustment`<sup>Required</sup> <a name="scaling_adjustment" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.scalingAdjustment"></a>

```python
scaling_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_adjustments`<sup>Required</sup> <a name="step_adjustments" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.stepAdjustments"></a>

```python
step_adjustments: DataAwsccAutoscalingScalingPolicyStepAdjustmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList">DataAwsccAutoscalingScalingPolicyStepAdjustmentsList</a>

---

##### `target_tracking_configuration`<sup>Required</sup> <a name="target_tracking_configuration" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.targetTrackingConfiguration"></a>

```python
target_tracking_configuration: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAutoscalingScalingPolicyConfig <a name="DataAwsccAutoscalingScalingPolicyConfig" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/autoscaling_scaling_policy#id DataAwsccAutoscalingScalingPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification()
```


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification()
```


### DataAwsccAutoscalingScalingPolicyStepAdjustments <a name="DataAwsccAutoscalingScalingPolicyStepAdjustments" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments()
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration()
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification()
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions()
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics()
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat()
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric()
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions()
```


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```python
dimensions: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```python
metric: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.returnData">return_data</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `metric_stat`<sup>Required</sup> <a name="metric_stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.metricStat"></a>

```python
metric_stat: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference</a>

---

##### `return_data`<sup>Required</sup> <a name="return_data" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.returnData"></a>

```python
return_data: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueries</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.metricDataQueries">metric_data_queries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_data_queries`<sup>Required</sup> <a name="metric_data_queries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.metricDataQueries"></a>

```python
metric_data_queries: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationMetricDataQueriesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```python
dimensions: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```python
metric: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.returnData">return_data</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `metric_stat`<sup>Required</sup> <a name="metric_stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.metricStat"></a>

```python
metric_stat: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference</a>

---

##### `return_data`<sup>Required</sup> <a name="return_data" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.returnData"></a>

```python
return_data: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueries</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.metricDataQueries">metric_data_queries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_data_queries`<sup>Required</sup> <a name="metric_data_queries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.metricDataQueries"></a>

```python
metric_data_queries: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationMetricDataQueriesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```python
dimensions: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```python
metric: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.returnData">return_data</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `metric_stat`<sup>Required</sup> <a name="metric_stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.metricStat"></a>

```python
metric_stat: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference</a>

---

##### `return_data`<sup>Required</sup> <a name="return_data" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.returnData"></a>

```python
return_data: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueries</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.metricDataQueries">metric_data_queries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_data_queries`<sup>Required</sup> <a name="metric_data_queries" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.metricDataQueries"></a>

```python
metric_data_queries: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationMetricDataQueriesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedCapacityMetricSpecification">customized_capacity_metric_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedLoadMetricSpecification">customized_load_metric_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedScalingMetricSpecification">customized_scaling_metric_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedLoadMetricSpecification">predefined_load_metric_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedMetricPairSpecification">predefined_metric_pair_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedScalingMetricSpecification">predefined_scaling_metric_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customized_capacity_metric_specification`<sup>Required</sup> <a name="customized_capacity_metric_specification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedCapacityMetricSpecification"></a>

```python
customized_capacity_metric_specification: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedCapacityMetricSpecificationOutputReference</a>

---

##### `customized_load_metric_specification`<sup>Required</sup> <a name="customized_load_metric_specification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedLoadMetricSpecification"></a>

```python
customized_load_metric_specification: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedLoadMetricSpecificationOutputReference</a>

---

##### `customized_scaling_metric_specification`<sup>Required</sup> <a name="customized_scaling_metric_specification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.customizedScalingMetricSpecification"></a>

```python
customized_scaling_metric_specification: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsCustomizedScalingMetricSpecificationOutputReference</a>

---

##### `predefined_load_metric_specification`<sup>Required</sup> <a name="predefined_load_metric_specification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedLoadMetricSpecification"></a>

```python
predefined_load_metric_specification: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference</a>

---

##### `predefined_metric_pair_specification`<sup>Required</sup> <a name="predefined_metric_pair_specification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedMetricPairSpecification"></a>

```python
predefined_metric_pair_specification: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference</a>

---

##### `predefined_scaling_metric_specification`<sup>Required</sup> <a name="predefined_scaling_metric_specification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.predefinedScalingMetricSpecification"></a>

```python
predefined_scaling_metric_specification: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference</a>

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecifications</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.predefinedMetricType">predefined_metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel">resource_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_metric_type`<sup>Required</sup> <a name="predefined_metric_type" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```python
predefined_metric_type: str
```

- *Type:* str

---

##### `resource_label`<sup>Required</sup> <a name="resource_label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel"></a>

```python
resource_label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedLoadMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.predefinedMetricType">predefined_metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.resourceLabel">resource_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_metric_type`<sup>Required</sup> <a name="predefined_metric_type" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.predefinedMetricType"></a>

```python
predefined_metric_type: str
```

- *Type:* str

---

##### `resource_label`<sup>Required</sup> <a name="resource_label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.resourceLabel"></a>

```python
resource_label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedMetricPairSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedMetricType">predefined_metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel">resource_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_metric_type`<sup>Required</sup> <a name="predefined_metric_type" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```python
predefined_metric_type: str
```

- *Type:* str

---

##### `resource_label`<sup>Required</sup> <a name="resource_label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel"></a>

```python
resource_label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsPredefinedScalingMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference <a name="DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBreachBehavior">max_capacity_breach_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBuffer">max_capacity_buffer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.metricSpecifications">metric_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.schedulingBufferTime">scheduling_buffer_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity_breach_behavior`<sup>Required</sup> <a name="max_capacity_breach_behavior" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBreachBehavior"></a>

```python
max_capacity_breach_behavior: str
```

- *Type:* str

---

##### `max_capacity_buffer`<sup>Required</sup> <a name="max_capacity_buffer" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.maxCapacityBuffer"></a>

```python
max_capacity_buffer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_specifications`<sup>Required</sup> <a name="metric_specifications" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.metricSpecifications"></a>

```python
metric_specifications: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationMetricSpecificationsList</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `scheduling_buffer_time`<sup>Required</sup> <a name="scheduling_buffer_time" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.schedulingBufferTime"></a>

```python
scheduling_buffer_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration">DataAwsccAutoscalingScalingPolicyPredictiveScalingConfiguration</a>

---


### DataAwsccAutoscalingScalingPolicyStepAdjustmentsList <a name="DataAwsccAutoscalingScalingPolicyStepAdjustmentsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference <a name="DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.metricIntervalLowerBound">metric_interval_lower_bound</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.metricIntervalUpperBound">metric_interval_upper_bound</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.scalingAdjustment">scaling_adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments">DataAwsccAutoscalingScalingPolicyStepAdjustments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_interval_lower_bound`<sup>Required</sup> <a name="metric_interval_lower_bound" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.metricIntervalLowerBound"></a>

```python
metric_interval_lower_bound: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_interval_upper_bound`<sup>Required</sup> <a name="metric_interval_upper_bound" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.metricIntervalUpperBound"></a>

```python
metric_interval_upper_bound: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_adjustment`<sup>Required</sup> <a name="scaling_adjustment" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.scalingAdjustment"></a>

```python
scaling_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyStepAdjustments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyStepAdjustments">DataAwsccAutoscalingScalingPolicyStepAdjustments</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.dimensions"></a>

```python
dimensions: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.metric"></a>

```python
metric: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference</a>

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.returnData">return_data</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `metric_stat`<sup>Required</sup> <a name="metric_stat" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.metricStat"></a>

```python
metric_stat: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference</a>

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `return_data`<sup>Required</sup> <a name="return_data" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.returnData"></a>

```python
return_data: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions"></a>

```python
dimensions: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationDimensionsList</a>

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.metrics"></a>

```python
metrics: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.customizedMetricSpecification">customized_metric_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.predefinedMetricSpecification">predefined_metric_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration">DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customized_metric_specification`<sup>Required</sup> <a name="customized_metric_specification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.customizedMetricSpecification"></a>

```python
customized_metric_specification: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference</a>

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `predefined_metric_specification`<sup>Required</sup> <a name="predefined_metric_specification" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.predefinedMetricSpecification"></a>

```python
predefined_metric_specification: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference</a>

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration">DataAwsccAutoscalingScalingPolicyTargetTrackingConfiguration</a>

---


### DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference <a name="DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_autoscaling_scaling_policy

dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType">predefined_metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel">resource_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_metric_type`<sup>Required</sup> <a name="predefined_metric_type" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```python
predefined_metric_type: str
```

- *Type:* str

---

##### `resource_label`<sup>Required</sup> <a name="resource_label" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel"></a>

```python
resource_label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingScalingPolicy.DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification">DataAwsccAutoscalingScalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification</a>

---



