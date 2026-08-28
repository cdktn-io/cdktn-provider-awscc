# `dataAwsccCloudformationGuardHook` Submodule <a name="`dataAwsccCloudformationGuardHook` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationGuardHook <a name="DataAwsccCloudformationGuardHook" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudformation_guard_hook awscc_cloudformation_guard_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudformation_guard_hook#id DataAwsccCloudformationGuardHook#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationGuardHook resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudformationGuardHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudformationGuardHook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudformationGuardHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationGuardHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.executionRole">execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.failureMode">failure_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookArn">hook_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookStatus">hook_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.logBucket">log_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference">DataAwsccCloudformationGuardHookOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.ruleLocation">rule_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference">DataAwsccCloudformationGuardHookRuleLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.stackFilters">stack_filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference">DataAwsccCloudformationGuardHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetFilters">target_filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference">DataAwsccCloudformationGuardHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetOperations">target_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `execution_role`<sup>Required</sup> <a name="execution_role" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.executionRole"></a>

```python
execution_role: str
```

- *Type:* str

---

##### `failure_mode`<sup>Required</sup> <a name="failure_mode" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

---

##### `hook_arn`<sup>Required</sup> <a name="hook_arn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookArn"></a>

```python
hook_arn: str
```

- *Type:* str

---

##### `hook_status`<sup>Required</sup> <a name="hook_status" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.hookStatus"></a>

```python
hook_status: str
```

- *Type:* str

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.options"></a>

```python
options: DataAwsccCloudformationGuardHookOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference">DataAwsccCloudformationGuardHookOptionsOutputReference</a>

---

##### `rule_location`<sup>Required</sup> <a name="rule_location" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.ruleLocation"></a>

```python
rule_location: DataAwsccCloudformationGuardHookRuleLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference">DataAwsccCloudformationGuardHookRuleLocationOutputReference</a>

---

##### `stack_filters`<sup>Required</sup> <a name="stack_filters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.stackFilters"></a>

```python
stack_filters: DataAwsccCloudformationGuardHookStackFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference">DataAwsccCloudformationGuardHookStackFiltersOutputReference</a>

---

##### `target_filters`<sup>Required</sup> <a name="target_filters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetFilters"></a>

```python
target_filters: DataAwsccCloudformationGuardHookTargetFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference">DataAwsccCloudformationGuardHookTargetFiltersOutputReference</a>

---

##### `target_operations`<sup>Required</sup> <a name="target_operations" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.targetOperations"></a>

```python
target_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationGuardHookConfig <a name="DataAwsccCloudformationGuardHookConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudformation_guard_hook#id DataAwsccCloudformationGuardHook#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationGuardHookOptions <a name="DataAwsccCloudformationGuardHookOptions" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions()
```


### DataAwsccCloudformationGuardHookRuleLocation <a name="DataAwsccCloudformationGuardHookRuleLocation" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation()
```


### DataAwsccCloudformationGuardHookStackFilters <a name="DataAwsccCloudformationGuardHookStackFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters()
```


### DataAwsccCloudformationGuardHookStackFiltersStackNames <a name="DataAwsccCloudformationGuardHookStackFiltersStackNames" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames()
```


### DataAwsccCloudformationGuardHookStackFiltersStackRoles <a name="DataAwsccCloudformationGuardHookStackFiltersStackRoles" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles()
```


### DataAwsccCloudformationGuardHookTargetFilters <a name="DataAwsccCloudformationGuardHookTargetFilters" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters()
```


### DataAwsccCloudformationGuardHookTargetFiltersTargets <a name="DataAwsccCloudformationGuardHookTargetFiltersTargets" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationGuardHookOptionsOutputReference <a name="DataAwsccCloudformationGuardHookOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.inputParams">input_params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions">DataAwsccCloudformationGuardHookOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_params`<sup>Required</sup> <a name="input_params" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.inputParams"></a>

```python
input_params: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationGuardHookOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookOptions">DataAwsccCloudformationGuardHookOptions</a>

---


### DataAwsccCloudformationGuardHookRuleLocationOutputReference <a name="DataAwsccCloudformationGuardHookRuleLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation">DataAwsccCloudformationGuardHookRuleLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationGuardHookRuleLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookRuleLocation">DataAwsccCloudformationGuardHookRuleLocation</a>

---


### DataAwsccCloudformationGuardHookStackFiltersOutputReference <a name="DataAwsccCloudformationGuardHookStackFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria">filtering_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackNames">stack_names</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackRoles">stack_roles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters">DataAwsccCloudformationGuardHookStackFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filtering_criteria`<sup>Required</sup> <a name="filtering_criteria" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria"></a>

```python
filtering_criteria: str
```

- *Type:* str

---

##### `stack_names`<sup>Required</sup> <a name="stack_names" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackNames"></a>

```python
stack_names: DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference</a>

---

##### `stack_roles`<sup>Required</sup> <a name="stack_roles" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.stackRoles"></a>

```python
stack_roles: DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference">DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationGuardHookStackFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFilters">DataAwsccCloudformationGuardHookStackFilters</a>

---


### DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference <a name="DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames">DataAwsccCloudformationGuardHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationGuardHookStackFiltersStackNames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackNames">DataAwsccCloudformationGuardHookStackFiltersStackNames</a>

---


### DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference <a name="DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles">DataAwsccCloudformationGuardHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationGuardHookStackFiltersStackRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookStackFiltersStackRoles">DataAwsccCloudformationGuardHookStackFiltersStackRoles</a>

---


### DataAwsccCloudformationGuardHookTargetFiltersOutputReference <a name="DataAwsccCloudformationGuardHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints">invocation_points</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targetNames">target_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList">DataAwsccCloudformationGuardHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters">DataAwsccCloudformationGuardHookTargetFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invocation_points`<sup>Required</sup> <a name="invocation_points" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints"></a>

```python
invocation_points: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_names`<sup>Required</sup> <a name="target_names" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targetNames"></a>

```python
target_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.targets"></a>

```python
targets: DataAwsccCloudformationGuardHookTargetFiltersTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList">DataAwsccCloudformationGuardHookTargetFiltersTargetsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationGuardHookTargetFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFilters">DataAwsccCloudformationGuardHookTargetFilters</a>

---


### DataAwsccCloudformationGuardHookTargetFiltersTargetsList <a name="DataAwsccCloudformationGuardHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference <a name="DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudformation_guard_hook

dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint">invocation_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets">DataAwsccCloudformationGuardHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `invocation_point`<sup>Required</sup> <a name="invocation_point" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```python
invocation_point: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudformationGuardHookTargetFiltersTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGuardHook.DataAwsccCloudformationGuardHookTargetFiltersTargets">DataAwsccCloudformationGuardHookTargetFiltersTargets</a>

---



