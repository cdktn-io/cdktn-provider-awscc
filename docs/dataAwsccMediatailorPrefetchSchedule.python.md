# `dataAwsccMediatailorPrefetchSchedule` Submodule <a name="`dataAwsccMediatailorPrefetchSchedule` Submodule" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediatailorPrefetchSchedule <a name="DataAwsccMediatailorPrefetchSchedule" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule awscc_mediatailor_prefetch_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule#id DataAwsccMediatailorPrefetchSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediatailorPrefetchSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediatailorPrefetchSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediatailorPrefetchSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediatailorPrefetchSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.consumption">consumption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.playbackConfigurationName">playback_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.recurringPrefetchConfiguration">recurring_prefetch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.scheduleType">schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.streamId">stream_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList">DataAwsccMediatailorPrefetchScheduleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `consumption`<sup>Required</sup> <a name="consumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.consumption"></a>

```python
consumption: DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `playback_configuration_name`<sup>Required</sup> <a name="playback_configuration_name" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.playbackConfigurationName"></a>

```python
playback_configuration_name: str
```

- *Type:* str

---

##### `recurring_prefetch_configuration`<sup>Required</sup> <a name="recurring_prefetch_configuration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.recurringPrefetchConfiguration"></a>

```python
recurring_prefetch_configuration: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference</a>

---

##### `retrieval`<sup>Required</sup> <a name="retrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.retrieval"></a>

```python
retrieval: DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference</a>

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

---

##### `stream_id`<sup>Required</sup> <a name="stream_id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.streamId"></a>

```python
stream_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tags"></a>

```python
tags: DataAwsccMediatailorPrefetchScheduleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList">DataAwsccMediatailorPrefetchScheduleTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediatailorPrefetchScheduleConfig <a name="DataAwsccMediatailorPrefetchScheduleConfig" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediatailor_prefetch_schedule#id DataAwsccMediatailorPrefetchSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediatailorPrefetchScheduleConsumption <a name="DataAwsccMediatailorPrefetchScheduleConsumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption()
```


### DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria <a name="DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria()
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration()
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption()
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria()
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval()
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow()
```


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration()
```


### DataAwsccMediatailorPrefetchScheduleRetrieval <a name="DataAwsccMediatailorPrefetchScheduleRetrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval()
```


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow()
```


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration()
```


### DataAwsccMediatailorPrefetchScheduleTags <a name="DataAwsccMediatailorPrefetchScheduleTags" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList <a name="DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference <a name="DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">dynamic_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_variable`<sup>Required</sup> <a name="dynamic_variable" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```python
dynamic_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteria</a>

---


### DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference <a name="DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria">avail_matching_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption">DataAwsccMediatailorPrefetchScheduleConsumption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avail_matching_criteria`<sup>Required</sup> <a name="avail_matching_criteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.availMatchingCriteria"></a>

```python
avail_matching_criteria: DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleConsumptionAvailMatchingCriteriaList</a>

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleConsumption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleConsumption">DataAwsccMediatailorPrefetchScheduleConsumption</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption">recurring_consumption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval">recurring_retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `recurring_consumption`<sup>Required</sup> <a name="recurring_consumption" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringConsumption"></a>

```python
recurring_consumption: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference</a>

---

##### `recurring_retrieval`<sup>Required</sup> <a name="recurring_retrieval" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.recurringRetrieval"></a>

```python
recurring_retrieval: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference</a>

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfiguration</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable">dynamic_variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_variable`<sup>Required</sup> <a name="dynamic_variable" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.dynamicVariable"></a>

```python
dynamic_variable: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteria</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria">avail_matching_criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds">retrieved_ad_expiration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `avail_matching_criteria`<sup>Required</sup> <a name="avail_matching_criteria" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.availMatchingCriteria"></a>

```python
avail_matching_criteria: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionAvailMatchingCriteriaList</a>

---

##### `retrieved_ad_expiration_seconds`<sup>Required</sup> <a name="retrieved_ad_expiration_seconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.retrievedAdExpirationSeconds"></a>

```python
retrieved_ad_expiration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringConsumption</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds">delay_after_avail_end_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables">dynamic_variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow">traffic_shaping_retrieval_window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration">traffic_shaping_tps_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType">traffic_shaping_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delay_after_avail_end_seconds`<sup>Required</sup> <a name="delay_after_avail_end_seconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.delayAfterAvailEndSeconds"></a>

```python
delay_after_avail_end_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dynamic_variables`<sup>Required</sup> <a name="dynamic_variables" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.dynamicVariables"></a>

```python
dynamic_variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `traffic_shaping_retrieval_window`<sup>Required</sup> <a name="traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```python
traffic_shaping_retrieval_window: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `traffic_shaping_tps_configuration`<sup>Required</sup> <a name="traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```python
traffic_shaping_tps_configuration: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `traffic_shaping_type`<sup>Required</sup> <a name="traffic_shaping_type" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.trafficShapingType"></a>

```python
traffic_shaping_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrieval</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">retrieval_window_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retrieval_window_duration_seconds`<sup>Required</sup> <a name="retrieval_window_duration_seconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```python
retrieval_window_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingRetrievalWindow</a>

---


### DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">peak_concurrent_users</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">peak_tps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peak_concurrent_users`<sup>Required</sup> <a name="peak_concurrent_users" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```python
peak_concurrent_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peak_tps`<sup>Required</sup> <a name="peak_tps" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```python
peak_tps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRecurringPrefetchConfigurationRecurringRetrievalTrafficShapingTpsConfiguration</a>

---


### DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables">dynamic_variables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow">traffic_shaping_retrieval_window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration">traffic_shaping_tps_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType">traffic_shaping_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval">DataAwsccMediatailorPrefetchScheduleRetrieval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_variables`<sup>Required</sup> <a name="dynamic_variables" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.dynamicVariables"></a>

```python
dynamic_variables: StringMap
```

- *Type:* cdktn.StringMap

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `traffic_shaping_retrieval_window`<sup>Required</sup> <a name="traffic_shaping_retrieval_window" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingRetrievalWindow"></a>

```python
traffic_shaping_retrieval_window: DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference</a>

---

##### `traffic_shaping_tps_configuration`<sup>Required</sup> <a name="traffic_shaping_tps_configuration" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingTpsConfiguration"></a>

```python
traffic_shaping_tps_configuration: DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference</a>

---

##### `traffic_shaping_type`<sup>Required</sup> <a name="traffic_shaping_type" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.trafficShapingType"></a>

```python
traffic_shaping_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleRetrieval
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrieval">DataAwsccMediatailorPrefetchScheduleRetrieval</a>

---


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds">retrieval_window_duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retrieval_window_duration_seconds`<sup>Required</sup> <a name="retrieval_window_duration_seconds" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.retrievalWindowDurationSeconds"></a>

```python
retrieval_window_duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingRetrievalWindow</a>

---


### DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference <a name="DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers">peak_concurrent_users</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps">peak_tps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peak_concurrent_users`<sup>Required</sup> <a name="peak_concurrent_users" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakConcurrentUsers"></a>

```python
peak_concurrent_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peak_tps`<sup>Required</sup> <a name="peak_tps" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.peakTps"></a>

```python
peak_tps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration">DataAwsccMediatailorPrefetchScheduleRetrievalTrafficShapingTpsConfiguration</a>

---


### DataAwsccMediatailorPrefetchScheduleTagsList <a name="DataAwsccMediatailorPrefetchScheduleTagsList" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediatailorPrefetchScheduleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediatailorPrefetchScheduleTagsOutputReference <a name="DataAwsccMediatailorPrefetchScheduleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediatailor_prefetch_schedule

dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags">DataAwsccMediatailorPrefetchScheduleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediatailorPrefetchScheduleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediatailorPrefetchSchedule.DataAwsccMediatailorPrefetchScheduleTags">DataAwsccMediatailorPrefetchScheduleTags</a>

---



