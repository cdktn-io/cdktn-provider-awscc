# `dataAwsccLookoutequipmentInferenceScheduler` Submodule <a name="`dataAwsccLookoutequipmentInferenceScheduler` Submodule" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLookoutequipmentInferenceScheduler <a name="DataAwsccLookoutequipmentInferenceScheduler" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutequipment_inference_scheduler#id DataAwsccLookoutequipmentInferenceScheduler#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccLookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccLookoutequipmentInferenceScheduler resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccLookoutequipmentInferenceScheduler to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccLookoutequipmentInferenceScheduler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutequipment_inference_scheduler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLookoutequipmentInferenceScheduler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes">data_delay_offset_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataInputConfiguration">data_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataOutputConfiguration">data_output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataUploadFrequency">data_upload_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerArn">inference_scheduler_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerName">inference_scheduler_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.serverSideKmsKeyId">server_side_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList">DataAwsccLookoutequipmentInferenceSchedulerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `data_delay_offset_in_minutes`<sup>Required</sup> <a name="data_delay_offset_in_minutes" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataDelayOffsetInMinutes"></a>

```python
data_delay_offset_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_input_configuration`<sup>Required</sup> <a name="data_input_configuration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataInputConfiguration"></a>

```python
data_input_configuration: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference</a>

---

##### `data_output_configuration`<sup>Required</sup> <a name="data_output_configuration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataOutputConfiguration"></a>

```python
data_output_configuration: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference</a>

---

##### `data_upload_frequency`<sup>Required</sup> <a name="data_upload_frequency" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.dataUploadFrequency"></a>

```python
data_upload_frequency: str
```

- *Type:* str

---

##### `inference_scheduler_arn`<sup>Required</sup> <a name="inference_scheduler_arn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerArn"></a>

```python
inference_scheduler_arn: str
```

- *Type:* str

---

##### `inference_scheduler_name`<sup>Required</sup> <a name="inference_scheduler_name" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.inferenceSchedulerName"></a>

```python
inference_scheduler_name: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `server_side_kms_key_id`<sup>Required</sup> <a name="server_side_kms_key_id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.serverSideKmsKeyId"></a>

```python
server_side_kms_key_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tags"></a>

```python
tags: DataAwsccLookoutequipmentInferenceSchedulerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList">DataAwsccLookoutequipmentInferenceSchedulerTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceScheduler.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLookoutequipmentInferenceSchedulerConfig <a name="DataAwsccLookoutequipmentInferenceSchedulerConfig" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/lookoutequipment_inference_scheduler#id DataAwsccLookoutequipmentInferenceScheduler#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration()
```


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration()
```


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration()
```


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration()
```


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration()
```


### DataAwsccLookoutequipmentInferenceSchedulerTags <a name="DataAwsccLookoutequipmentInferenceSchedulerTags" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter">component_timestamp_delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat">timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_timestamp_delimiter`<sup>Required</sup> <a name="component_timestamp_delimiter" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.componentTimestampDelimiter"></a>

```python
component_timestamp_delimiter: str
```

- *Type:* str

---

##### `timestamp_format`<sup>Required</sup> <a name="timestamp_format" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.timestampFormat"></a>

```python
timestamp_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration">inference_input_name_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset">input_time_zone_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration">s3_input_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inference_input_name_configuration`<sup>Required</sup> <a name="inference_input_name_configuration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inferenceInputNameConfiguration"></a>

```python
inference_input_name_configuration: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationInferenceInputNameConfigurationOutputReference</a>

---

##### `input_time_zone_offset`<sup>Required</sup> <a name="input_time_zone_offset" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.inputTimeZoneOffset"></a>

```python
input_time_zone_offset: str
```

- *Type:* str

---

##### `s3_input_configuration`<sup>Required</sup> <a name="s3_input_configuration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.s3InputConfiguration"></a>

```python
s3_input_configuration: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataInputConfigurationS3InputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration">s3_output_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `s3_output_configuration`<sup>Required</sup> <a name="s3_output_configuration" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.s3OutputConfiguration"></a>

```python
s3_output_configuration: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration">DataAwsccLookoutequipmentInferenceSchedulerDataOutputConfigurationS3OutputConfiguration</a>

---


### DataAwsccLookoutequipmentInferenceSchedulerTagsList <a name="DataAwsccLookoutequipmentInferenceSchedulerTagsList" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference <a name="DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_lookoutequipment_inference_scheduler

dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags">DataAwsccLookoutequipmentInferenceSchedulerTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccLookoutequipmentInferenceSchedulerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLookoutequipmentInferenceScheduler.DataAwsccLookoutequipmentInferenceSchedulerTags">DataAwsccLookoutequipmentInferenceSchedulerTags</a>

---



