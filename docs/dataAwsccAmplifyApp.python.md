# `dataAwsccAmplifyApp` Submodule <a name="`dataAwsccAmplifyApp` Submodule" id="@cdktn/provider-awscc.dataAwsccAmplifyApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAmplifyApp <a name="DataAwsccAmplifyApp" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/amplify_app awscc_amplify_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyApp(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/amplify_app#id DataAwsccAmplifyApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAmplifyApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyApp.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAmplifyApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAmplifyApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAmplifyApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/amplify_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAmplifyApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.autoBranchCreationConfig">auto_branch_creation_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference">DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference">DataAwsccAmplifyAppBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.buildSpec">build_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.cacheConfig">cache_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference">DataAwsccAmplifyAppCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.computeRoleArn">compute_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.customHeaders">custom_headers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.customRules">custom_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList">DataAwsccAmplifyAppCustomRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.defaultDomain">default_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.enableBranchAutoDeletion">enable_branch_auto_deletion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.environmentVariables">environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList">DataAwsccAmplifyAppEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.iamServiceRole">iam_service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.jobConfig">job_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference">DataAwsccAmplifyAppJobConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.oauthToken">oauth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList">DataAwsccAmplifyAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_branch_creation_config`<sup>Required</sup> <a name="auto_branch_creation_config" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.autoBranchCreationConfig"></a>

```python
auto_branch_creation_config: DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference">DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference</a>

---

##### `basic_auth_config`<sup>Required</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.basicAuthConfig"></a>

```python
basic_auth_config: DataAwsccAmplifyAppBasicAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference">DataAwsccAmplifyAppBasicAuthConfigOutputReference</a>

---

##### `build_spec`<sup>Required</sup> <a name="build_spec" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

---

##### `cache_config`<sup>Required</sup> <a name="cache_config" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.cacheConfig"></a>

```python
cache_config: DataAwsccAmplifyAppCacheConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference">DataAwsccAmplifyAppCacheConfigOutputReference</a>

---

##### `compute_role_arn`<sup>Required</sup> <a name="compute_role_arn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.computeRoleArn"></a>

```python
compute_role_arn: str
```

- *Type:* str

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.customHeaders"></a>

```python
custom_headers: str
```

- *Type:* str

---

##### `custom_rules`<sup>Required</sup> <a name="custom_rules" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.customRules"></a>

```python
custom_rules: DataAwsccAmplifyAppCustomRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList">DataAwsccAmplifyAppCustomRulesList</a>

---

##### `default_domain`<sup>Required</sup> <a name="default_domain" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.defaultDomain"></a>

```python
default_domain: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_branch_auto_deletion`<sup>Required</sup> <a name="enable_branch_auto_deletion" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.enableBranchAutoDeletion"></a>

```python
enable_branch_auto_deletion: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.environmentVariables"></a>

```python
environment_variables: DataAwsccAmplifyAppEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList">DataAwsccAmplifyAppEnvironmentVariablesList</a>

---

##### `iam_service_role`<sup>Required</sup> <a name="iam_service_role" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.iamServiceRole"></a>

```python
iam_service_role: str
```

- *Type:* str

---

##### `job_config`<sup>Required</sup> <a name="job_config" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.jobConfig"></a>

```python
job_config: DataAwsccAmplifyAppJobConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference">DataAwsccAmplifyAppJobConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.tags"></a>

```python
tags: DataAwsccAmplifyAppTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList">DataAwsccAmplifyAppTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAmplifyAppAutoBranchCreationConfig <a name="DataAwsccAmplifyAppAutoBranchCreationConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig()
```


### DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig <a name="DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig()
```


### DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables <a name="DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables()
```


### DataAwsccAmplifyAppBasicAuthConfig <a name="DataAwsccAmplifyAppBasicAuthConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig()
```


### DataAwsccAmplifyAppCacheConfig <a name="DataAwsccAmplifyAppCacheConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig()
```


### DataAwsccAmplifyAppConfig <a name="DataAwsccAmplifyAppConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/amplify_app#id DataAwsccAmplifyApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAmplifyAppCustomRules <a name="DataAwsccAmplifyAppCustomRules" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules()
```


### DataAwsccAmplifyAppEnvironmentVariables <a name="DataAwsccAmplifyAppEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables()
```


### DataAwsccAmplifyAppJobConfig <a name="DataAwsccAmplifyAppJobConfig" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig()
```


### DataAwsccAmplifyAppTags <a name="DataAwsccAmplifyAppTags" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference <a name="DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth">enable_basic_auth</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig">DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_basic_auth`<sup>Required</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```python
enable_basic_auth: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig">DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---


### DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList <a name="DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference <a name="DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables">DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables">DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>

---


### DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference <a name="DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns">auto_branch_creation_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec">build_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation">enable_auto_branch_creation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild">enable_auto_build</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode">enable_performance_mode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig">DataAwsccAmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_branch_creation_patterns`<sup>Required</sup> <a name="auto_branch_creation_patterns" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns"></a>

```python
auto_branch_creation_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `basic_auth_config`<sup>Required</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig"></a>

```python
basic_auth_config: DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">DataAwsccAmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a>

---

##### `build_spec`<sup>Required</sup> <a name="build_spec" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

---

##### `enable_auto_branch_creation`<sup>Required</sup> <a name="enable_auto_branch_creation" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation"></a>

```python
enable_auto_branch_creation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_auto_build`<sup>Required</sup> <a name="enable_auto_build" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild"></a>

```python
enable_auto_build: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_performance_mode`<sup>Required</sup> <a name="enable_performance_mode" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode"></a>

```python
enable_performance_mode: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_pull_request_preview`<sup>Required</sup> <a name="enable_pull_request_preview" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview"></a>

```python
enable_pull_request_preview: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">DataAwsccAmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a>

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `pull_request_environment_name`<sup>Required</sup> <a name="pull_request_environment_name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName"></a>

```python
pull_request_environment_name: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAmplifyAppAutoBranchCreationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppAutoBranchCreationConfig">DataAwsccAmplifyAppAutoBranchCreationConfig</a>

---


### DataAwsccAmplifyAppBasicAuthConfigOutputReference <a name="DataAwsccAmplifyAppBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth">enable_basic_auth</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig">DataAwsccAmplifyAppBasicAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_basic_auth`<sup>Required</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```python
enable_basic_auth: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAmplifyAppBasicAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppBasicAuthConfig">DataAwsccAmplifyAppBasicAuthConfig</a>

---


### DataAwsccAmplifyAppCacheConfigOutputReference <a name="DataAwsccAmplifyAppCacheConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig">DataAwsccAmplifyAppCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAmplifyAppCacheConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCacheConfig">DataAwsccAmplifyAppCacheConfig</a>

---


### DataAwsccAmplifyAppCustomRulesList <a name="DataAwsccAmplifyAppCustomRulesList" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAmplifyAppCustomRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAmplifyAppCustomRulesOutputReference <a name="DataAwsccAmplifyAppCustomRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules">DataAwsccAmplifyAppCustomRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAmplifyAppCustomRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppCustomRules">DataAwsccAmplifyAppCustomRules</a>

---


### DataAwsccAmplifyAppEnvironmentVariablesList <a name="DataAwsccAmplifyAppEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAmplifyAppEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAmplifyAppEnvironmentVariablesOutputReference <a name="DataAwsccAmplifyAppEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables">DataAwsccAmplifyAppEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAmplifyAppEnvironmentVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppEnvironmentVariables">DataAwsccAmplifyAppEnvironmentVariables</a>

---


### DataAwsccAmplifyAppJobConfigOutputReference <a name="DataAwsccAmplifyAppJobConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.buildComputeType">build_compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig">DataAwsccAmplifyAppJobConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_compute_type`<sup>Required</sup> <a name="build_compute_type" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.buildComputeType"></a>

```python
build_compute_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAmplifyAppJobConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppJobConfig">DataAwsccAmplifyAppJobConfig</a>

---


### DataAwsccAmplifyAppTagsList <a name="DataAwsccAmplifyAppTagsList" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAmplifyAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAmplifyAppTagsOutputReference <a name="DataAwsccAmplifyAppTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_amplify_app

dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTags">DataAwsccAmplifyAppTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAmplifyAppTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAmplifyApp.DataAwsccAmplifyAppTags">DataAwsccAmplifyAppTags</a>

---



