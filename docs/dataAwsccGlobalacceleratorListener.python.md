# `dataAwsccGlobalacceleratorListener` Submodule <a name="`dataAwsccGlobalacceleratorListener` Submodule" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlobalacceleratorListener <a name="DataAwsccGlobalacceleratorListener" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/globalaccelerator_listener awscc_globalaccelerator_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_listener

dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/globalaccelerator_listener#id DataAwsccGlobalacceleratorListener#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlobalacceleratorListener resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_listener

dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_listener

dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_listener

dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_listener

dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlobalacceleratorListener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlobalacceleratorListener to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlobalacceleratorListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/globalaccelerator_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlobalacceleratorListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.acceleratorArn">accelerator_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.clientAffinity">client_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.listenerArn">listener_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.portRanges">port_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList">DataAwsccGlobalacceleratorListenerPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `accelerator_arn`<sup>Required</sup> <a name="accelerator_arn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.acceleratorArn"></a>

```python
accelerator_arn: str
```

- *Type:* str

---

##### `client_affinity`<sup>Required</sup> <a name="client_affinity" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.clientAffinity"></a>

```python
client_affinity: str
```

- *Type:* str

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

---

##### `port_ranges`<sup>Required</sup> <a name="port_ranges" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.portRanges"></a>

```python
port_ranges: DataAwsccGlobalacceleratorListenerPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList">DataAwsccGlobalacceleratorListenerPortRangesList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlobalacceleratorListenerConfig <a name="DataAwsccGlobalacceleratorListenerConfig" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_listener

dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/globalaccelerator_listener#id DataAwsccGlobalacceleratorListener#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlobalacceleratorListenerPortRanges <a name="DataAwsccGlobalacceleratorListenerPortRanges" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRanges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_listener

dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRanges()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlobalacceleratorListenerPortRangesList <a name="DataAwsccGlobalacceleratorListenerPortRangesList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_listener

dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlobalacceleratorListenerPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlobalacceleratorListenerPortRangesOutputReference <a name="DataAwsccGlobalacceleratorListenerPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_listener

dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRanges">DataAwsccGlobalacceleratorListenerPortRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlobalacceleratorListenerPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorListener.DataAwsccGlobalacceleratorListenerPortRanges">DataAwsccGlobalacceleratorListenerPortRanges</a>

---



