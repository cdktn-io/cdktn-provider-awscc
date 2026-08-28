# `dataAwsccXraySamplingRule` Submodule <a name="`dataAwsccXraySamplingRule` Submodule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccXraySamplingRule <a name="DataAwsccXraySamplingRule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/xray_sampling_rule awscc_xray_sampling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/xray_sampling_rule#id DataAwsccXraySamplingRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccXraySamplingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccXraySamplingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccXraySamplingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccXraySamplingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/xray_sampling_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccXraySamplingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRule">sampling_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference">DataAwsccXraySamplingRuleSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRuleRecord">sampling_rule_record</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRuleUpdate">sampling_rule_update</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference">DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList">DataAwsccXraySamplingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `sampling_rule`<sup>Required</sup> <a name="sampling_rule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRule"></a>

```python
sampling_rule: DataAwsccXraySamplingRuleSamplingRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference">DataAwsccXraySamplingRuleSamplingRuleOutputReference</a>

---

##### `sampling_rule_record`<sup>Required</sup> <a name="sampling_rule_record" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRuleRecord"></a>

```python
sampling_rule_record: DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference</a>

---

##### `sampling_rule_update`<sup>Required</sup> <a name="sampling_rule_update" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRuleUpdate"></a>

```python
sampling_rule_update: DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference">DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.tags"></a>

```python
tags: DataAwsccXraySamplingRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList">DataAwsccXraySamplingRuleTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccXraySamplingRuleConfig <a name="DataAwsccXraySamplingRuleConfig" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/xray_sampling_rule#id DataAwsccXraySamplingRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccXraySamplingRuleSamplingRule <a name="DataAwsccXraySamplingRuleSamplingRule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRule()
```


### DataAwsccXraySamplingRuleSamplingRuleRecord <a name="DataAwsccXraySamplingRuleSamplingRuleRecord" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecord.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecord()
```


### DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule <a name="DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule()
```


### DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost <a name="DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost()
```


### DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost <a name="DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost()
```


### DataAwsccXraySamplingRuleSamplingRuleUpdate <a name="DataAwsccXraySamplingRuleSamplingRuleUpdate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdate()
```


### DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost <a name="DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost()
```


### DataAwsccXraySamplingRuleTags <a name="DataAwsccXraySamplingRuleTags" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccXraySamplingRuleSamplingRuleOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost">sampling_rate_boost</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRule">DataAwsccXraySamplingRuleSamplingRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktn.StringMap

---

##### `fixed_rate`<sup>Required</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size`<sup>Required</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `sampling_rate_boost`<sup>Required</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost"></a>

```python
sampling_rate_boost: DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccXraySamplingRuleSamplingRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRule">DataAwsccXraySamplingRuleSamplingRule</a>

---


### DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule">sampling_rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecord">DataAwsccXraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `sampling_rule`<sup>Required</sup> <a name="sampling_rule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule"></a>

```python
sampling_rule: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccXraySamplingRuleSamplingRuleRecord
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecord">DataAwsccXraySamplingRuleSamplingRuleRecord</a>

---


### DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost">sampling_rate_boost</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktn.StringMap

---

##### `fixed_rate`<sup>Required</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size`<sup>Required</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `sampling_rate_boost`<sup>Required</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost"></a>

```python
sampling_rate_boost: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule</a>

---


### DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldown_window_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_window_minutes`<sup>Required</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```python
cooldown_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate`<sup>Required</sup> <a name="max_rate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---


### DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldown_window_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_window_minutes`<sup>Required</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```python
cooldown_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate`<sup>Required</sup> <a name="max_rate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost</a>

---


### DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate">fixed_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize">reservoir_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost">sampling_rate_boost</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath">url_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdate">DataAwsccXraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes"></a>

```python
attributes: StringMap
```

- *Type:* cdktn.StringMap

---

##### `fixed_rate`<sup>Required</sup> <a name="fixed_rate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate"></a>

```python
fixed_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reservoir_size`<sup>Required</sup> <a name="reservoir_size" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize"></a>

```python
reservoir_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `sampling_rate_boost`<sup>Required</sup> <a name="sampling_rate_boost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost"></a>

```python
sampling_rate_boost: DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a>

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `url_path`<sup>Required</sup> <a name="url_path" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath"></a>

```python
url_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccXraySamplingRuleSamplingRuleUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdate">DataAwsccXraySamplingRuleSamplingRuleUpdate</a>

---


### DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes">cooldown_window_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooldown_window_minutes`<sup>Required</sup> <a name="cooldown_window_minutes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```python
cooldown_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate`<sup>Required</sup> <a name="max_rate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---


### DataAwsccXraySamplingRuleTagsList <a name="DataAwsccXraySamplingRuleTagsList" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccXraySamplingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccXraySamplingRuleTagsOutputReference <a name="DataAwsccXraySamplingRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_xray_sampling_rule

dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTags">DataAwsccXraySamplingRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccXraySamplingRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTags">DataAwsccXraySamplingRuleTags</a>

---



