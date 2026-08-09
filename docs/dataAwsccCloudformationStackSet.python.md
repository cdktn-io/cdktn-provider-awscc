# `dataAwsccCloudformationStackSet` Submodule <a name="`dataAwsccCloudformationStackSet` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationStackSet <a name="DataAwsccCloudformationStackSet" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_stack_set awscc_cloudformation_stack_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_stack_set#id DataAwsccCloudformationStackSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationStackSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudformationStackSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudformationStackSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudformationStackSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_stack_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationStackSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.administrationRoleArn">administration_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.autoDeployment">auto_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference">DataAwsccCloudformationStackSetAutoDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.callAs">call_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.executionRoleName">execution_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.managedExecution">managed_execution</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference">DataAwsccCloudformationStackSetManagedExecutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.operationPreferences">operation_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference">DataAwsccCloudformationStackSetOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList">DataAwsccCloudformationStackSetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.permissionModel">permission_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackInstancesGroup">stack_instances_group</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList">DataAwsccCloudformationStackSetStackInstancesGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackSetId">stack_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackSetName">stack_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList">DataAwsccCloudformationStackSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.templateUrl">template_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `administration_role_arn`<sup>Required</sup> <a name="administration_role_arn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.administrationRoleArn"></a>

```python
administration_role_arn: str
```

- *Type:* str

---

##### `auto_deployment`<sup>Required</sup> <a name="auto_deployment" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.autoDeployment"></a>

```python
auto_deployment: DataAwsccCloudformationStackSetAutoDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference">DataAwsccCloudformationStackSetAutoDeploymentOutputReference</a>

---

##### `call_as`<sup>Required</sup> <a name="call_as" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.callAs"></a>

```python
call_as: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_role_name`<sup>Required</sup> <a name="execution_role_name" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.executionRoleName"></a>

```python
execution_role_name: str
```

- *Type:* str

---

##### `managed_execution`<sup>Required</sup> <a name="managed_execution" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.managedExecution"></a>

```python
managed_execution: DataAwsccCloudformationStackSetManagedExecutionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference">DataAwsccCloudformationStackSetManagedExecutionOutputReference</a>

---

##### `operation_preferences`<sup>Required</sup> <a name="operation_preferences" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.operationPreferences"></a>

```python
operation_preferences: DataAwsccCloudformationStackSetOperationPreferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference">DataAwsccCloudformationStackSetOperationPreferencesOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.parameters"></a>

```python
parameters: DataAwsccCloudformationStackSetParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList">DataAwsccCloudformationStackSetParametersList</a>

---

##### `permission_model`<sup>Required</sup> <a name="permission_model" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.permissionModel"></a>

```python
permission_model: str
```

- *Type:* str

---

##### `stack_instances_group`<sup>Required</sup> <a name="stack_instances_group" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackInstancesGroup"></a>

```python
stack_instances_group: DataAwsccCloudformationStackSetStackInstancesGroupList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList">DataAwsccCloudformationStackSetStackInstancesGroupList</a>

---

##### `stack_set_id`<sup>Required</sup> <a name="stack_set_id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackSetId"></a>

```python
stack_set_id: str
```

- *Type:* str

---

##### `stack_set_name`<sup>Required</sup> <a name="stack_set_name" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.stackSetName"></a>

```python
stack_set_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.tags"></a>

```python
tags: DataAwsccCloudformationStackSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList">DataAwsccCloudformationStackSetTagsList</a>

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_url`<sup>Required</sup> <a name="template_url" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationStackSetAutoDeployment <a name="DataAwsccCloudformationStackSetAutoDeployment" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeployment()
```


### DataAwsccCloudformationStackSetConfig <a name="DataAwsccCloudformationStackSetConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudformation_stack_set#id DataAwsccCloudformationStackSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationStackSetManagedExecution <a name="DataAwsccCloudformationStackSetManagedExecution" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecution.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecution()
```


### DataAwsccCloudformationStackSetOperationPreferences <a name="DataAwsccCloudformationStackSetOperationPreferences" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferences.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferences()
```


### DataAwsccCloudformationStackSetParameters <a name="DataAwsccCloudformationStackSetParameters" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParameters()
```


### DataAwsccCloudformationStackSetStackInstancesGroup <a name="DataAwsccCloudformationStackSetStackInstancesGroup" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroup()
```


### DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets <a name="DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets()
```


### DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides <a name="DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides()
```


### DataAwsccCloudformationStackSetTags <a name="DataAwsccCloudformationStackSetTags" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationStackSetAutoDeploymentOutputReference <a name="DataAwsccCloudformationStackSetAutoDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval">retain_stacks_on_account_removal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeployment">DataAwsccCloudformationStackSetAutoDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `retain_stacks_on_account_removal`<sup>Required</sup> <a name="retain_stacks_on_account_removal" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval"></a>

```python
retain_stacks_on_account_removal: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationStackSetAutoDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetAutoDeployment">DataAwsccCloudformationStackSetAutoDeployment</a>

---


### DataAwsccCloudformationStackSetManagedExecutionOutputReference <a name="DataAwsccCloudformationStackSetManagedExecutionOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.active">active</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecution">DataAwsccCloudformationStackSetManagedExecution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecutionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationStackSetManagedExecution
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetManagedExecution">DataAwsccCloudformationStackSetManagedExecution</a>

---


### DataAwsccCloudformationStackSetOperationPreferencesOutputReference <a name="DataAwsccCloudformationStackSetOperationPreferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.concurrencyMode">concurrency_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount">failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage">failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount">max_concurrent_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage">max_concurrent_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType">region_concurrency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.regionOrder">region_order</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferences">DataAwsccCloudformationStackSetOperationPreferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrency_mode`<sup>Required</sup> <a name="concurrency_mode" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.concurrencyMode"></a>

```python
concurrency_mode: str
```

- *Type:* str

---

##### `failure_tolerance_count`<sup>Required</sup> <a name="failure_tolerance_count" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```python
failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_tolerance_percentage`<sup>Required</sup> <a name="failure_tolerance_percentage" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```python
failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_count`<sup>Required</sup> <a name="max_concurrent_count" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```python
max_concurrent_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_percentage`<sup>Required</sup> <a name="max_concurrent_percentage" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```python
max_concurrent_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_concurrency_type`<sup>Required</sup> <a name="region_concurrency_type" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```python
region_concurrency_type: str
```

- *Type:* str

---

##### `region_order`<sup>Required</sup> <a name="region_order" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.regionOrder"></a>

```python
region_order: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationStackSetOperationPreferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetOperationPreferences">DataAwsccCloudformationStackSetOperationPreferences</a>

---


### DataAwsccCloudformationStackSetParametersList <a name="DataAwsccCloudformationStackSetParametersList" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudformationStackSetParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudformationStackSetParametersOutputReference <a name="DataAwsccCloudformationStackSetParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.parameterKey">parameter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParameters">DataAwsccCloudformationStackSetParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_key`<sup>Required</sup> <a name="parameter_key" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationStackSetParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetParameters">DataAwsccCloudformationStackSetParameters</a>

---


### DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference <a name="DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterType">account_filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrl">accounts_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIds">organizational_unit_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets">DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_filter_type`<sup>Required</sup> <a name="account_filter_type" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterType"></a>

```python
account_filter_type: str
```

- *Type:* str

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accounts_url`<sup>Required</sup> <a name="accounts_url" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrl"></a>

```python
accounts_url: str
```

- *Type:* str

---

##### `organizational_unit_ids`<sup>Required</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIds"></a>

```python
organizational_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets">DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets</a>

---


### DataAwsccCloudformationStackSetStackInstancesGroupList <a name="DataAwsccCloudformationStackSetStackInstancesGroupList" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudformationStackSetStackInstancesGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudformationStackSetStackInstancesGroupOutputReference <a name="DataAwsccCloudformationStackSetStackInstancesGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargets">deployment_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference">DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverrides">parameter_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList">DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroup">DataAwsccCloudformationStackSetStackInstancesGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_targets`<sup>Required</sup> <a name="deployment_targets" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargets"></a>

```python
deployment_targets: DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference">DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference</a>

---

##### `parameter_overrides`<sup>Required</sup> <a name="parameter_overrides" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverrides"></a>

```python
parameter_overrides: DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList">DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationStackSetStackInstancesGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroup">DataAwsccCloudformationStackSetStackInstancesGroup</a>

---


### DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList <a name="DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference <a name="DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKey">parameter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides">DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_key`<sup>Required</sup> <a name="parameter_key" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides">DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides</a>

---


### DataAwsccCloudformationStackSetTagsList <a name="DataAwsccCloudformationStackSetTagsList" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudformationStackSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudformationStackSetTagsOutputReference <a name="DataAwsccCloudformationStackSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_stack_set

dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTags">DataAwsccCloudformationStackSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationStackSetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationStackSet.DataAwsccCloudformationStackSetTags">DataAwsccCloudformationStackSetTags</a>

---



