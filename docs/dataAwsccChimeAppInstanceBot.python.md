# `dataAwsccChimeAppInstanceBot` Submodule <a name="`dataAwsccChimeAppInstanceBot` Submodule" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChimeAppInstanceBot <a name="DataAwsccChimeAppInstanceBot" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_bot awscc_chime_app_instance_bot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_bot#id DataAwsccChimeAppInstanceBot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccChimeAppInstanceBot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccChimeAppInstanceBot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccChimeAppInstanceBot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccChimeAppInstanceBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChimeAppInstanceBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceBotArn">app_instance_bot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference">DataAwsccChimeAppInstanceBotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList">DataAwsccChimeAppInstanceBotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceArn"></a>

```python
app_instance_arn: str
```

- *Type:* str

---

##### `app_instance_bot_arn`<sup>Required</sup> <a name="app_instance_bot_arn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.appInstanceBotArn"></a>

```python
app_instance_bot_arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.configuration"></a>

```python
configuration: DataAwsccChimeAppInstanceBotConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference">DataAwsccChimeAppInstanceBotConfigurationOutputReference</a>

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tags"></a>

```python
tags: DataAwsccChimeAppInstanceBotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList">DataAwsccChimeAppInstanceBotTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChimeAppInstanceBotConfig <a name="DataAwsccChimeAppInstanceBotConfig" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/chime_app_instance_bot#id DataAwsccChimeAppInstanceBot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccChimeAppInstanceBotConfiguration <a name="DataAwsccChimeAppInstanceBotConfiguration" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration()
```


### DataAwsccChimeAppInstanceBotConfigurationLex <a name="DataAwsccChimeAppInstanceBotConfigurationLex" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex()
```


### DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy <a name="DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy()
```


### DataAwsccChimeAppInstanceBotTags <a name="DataAwsccChimeAppInstanceBotTags" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference <a name="DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages">standard_messages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages">targeted_messages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy">DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard_messages`<sup>Required</sup> <a name="standard_messages" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages"></a>

```python
standard_messages: str
```

- *Type:* str

---

##### `targeted_messages`<sup>Required</sup> <a name="targeted_messages" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages"></a>

```python
targeted_messages: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy">DataAwsccChimeAppInstanceBotConfigurationLexInvokedBy</a>

---


### DataAwsccChimeAppInstanceBotConfigurationLexOutputReference <a name="DataAwsccChimeAppInstanceBotConfigurationLexOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy">invoked_by</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn">lex_bot_alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.localeId">locale_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo">responds_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent">welcome_intent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex">DataAwsccChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoked_by`<sup>Required</sup> <a name="invoked_by" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy"></a>

```python
invoked_by: DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a>

---

##### `lex_bot_alias_arn`<sup>Required</sup> <a name="lex_bot_alias_arn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn"></a>

```python
lex_bot_alias_arn: str
```

- *Type:* str

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

---

##### `responds_to`<sup>Required</sup> <a name="responds_to" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo"></a>

```python
responds_to: str
```

- *Type:* str

---

##### `welcome_intent`<sup>Required</sup> <a name="welcome_intent" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent"></a>

```python
welcome_intent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccChimeAppInstanceBotConfigurationLex
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLex">DataAwsccChimeAppInstanceBotConfigurationLex</a>

---


### DataAwsccChimeAppInstanceBotConfigurationOutputReference <a name="DataAwsccChimeAppInstanceBotConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration">DataAwsccChimeAppInstanceBotConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.lex"></a>

```python
lex: DataAwsccChimeAppInstanceBotConfigurationLexOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationLexOutputReference">DataAwsccChimeAppInstanceBotConfigurationLexOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccChimeAppInstanceBotConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotConfiguration">DataAwsccChimeAppInstanceBotConfiguration</a>

---


### DataAwsccChimeAppInstanceBotTagsList <a name="DataAwsccChimeAppInstanceBotTagsList" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccChimeAppInstanceBotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccChimeAppInstanceBotTagsOutputReference <a name="DataAwsccChimeAppInstanceBotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_chime_app_instance_bot

dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags">DataAwsccChimeAppInstanceBotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccChimeAppInstanceBotTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeAppInstanceBot.DataAwsccChimeAppInstanceBotTags">DataAwsccChimeAppInstanceBotTags</a>

---



