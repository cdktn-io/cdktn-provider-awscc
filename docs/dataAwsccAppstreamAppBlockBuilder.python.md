# `dataAwsccAppstreamAppBlockBuilder` Submodule <a name="`dataAwsccAppstreamAppBlockBuilder` Submodule" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppstreamAppBlockBuilder <a name="DataAwsccAppstreamAppBlockBuilder" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appstream_app_block_builder awscc_appstream_app_block_builder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appstream_app_block_builder#id DataAwsccAppstreamAppBlockBuilder#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAppstreamAppBlockBuilder resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAppstreamAppBlockBuilder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAppstreamAppBlockBuilder to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAppstreamAppBlockBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appstream_app_block_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppstreamAppBlockBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.accessEndpoints">access_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList">DataAwsccAppstreamAppBlockBuilderAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.appBlockArns">app_block_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList">DataAwsccAppstreamAppBlockBuilderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference">DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_endpoints`<sup>Required</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.accessEndpoints"></a>

```python
access_endpoints: DataAwsccAppstreamAppBlockBuilderAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList">DataAwsccAppstreamAppBlockBuilderAccessEndpointsList</a>

---

##### `app_block_arns`<sup>Required</sup> <a name="app_block_arns" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.appBlockArns"></a>

```python
app_block_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_default_internet_access`<sup>Required</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.enableDefaultInternetAccess"></a>

```python
enable_default_internet_access: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.tags"></a>

```python
tags: DataAwsccAppstreamAppBlockBuilderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList">DataAwsccAppstreamAppBlockBuilderTagsList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.vpcConfig"></a>

```python
vpc_config: DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference">DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppstreamAppBlockBuilderAccessEndpoints <a name="DataAwsccAppstreamAppBlockBuilderAccessEndpoints" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpoints()
```


### DataAwsccAppstreamAppBlockBuilderConfig <a name="DataAwsccAppstreamAppBlockBuilderConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/appstream_app_block_builder#id DataAwsccAppstreamAppBlockBuilder#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppstreamAppBlockBuilderTags <a name="DataAwsccAppstreamAppBlockBuilderTags" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTags()
```


### DataAwsccAppstreamAppBlockBuilderVpcConfig <a name="DataAwsccAppstreamAppBlockBuilderVpcConfig" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppstreamAppBlockBuilderAccessEndpointsList <a name="DataAwsccAppstreamAppBlockBuilderAccessEndpointsList" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference <a name="DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceId">vpce_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpoints">DataAwsccAppstreamAppBlockBuilderAccessEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `vpce_id`<sup>Required</sup> <a name="vpce_id" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceId"></a>

```python
vpce_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamAppBlockBuilderAccessEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderAccessEndpoints">DataAwsccAppstreamAppBlockBuilderAccessEndpoints</a>

---


### DataAwsccAppstreamAppBlockBuilderTagsList <a name="DataAwsccAppstreamAppBlockBuilderTagsList" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppstreamAppBlockBuilderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppstreamAppBlockBuilderTagsOutputReference <a name="DataAwsccAppstreamAppBlockBuilderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTags">DataAwsccAppstreamAppBlockBuilderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamAppBlockBuilderTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderTags">DataAwsccAppstreamAppBlockBuilderTags</a>

---


### DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference <a name="DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appstream_app_block_builder

dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfig">DataAwsccAppstreamAppBlockBuilderVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppstreamAppBlockBuilderVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppstreamAppBlockBuilder.DataAwsccAppstreamAppBlockBuilderVpcConfig">DataAwsccAppstreamAppBlockBuilderVpcConfig</a>

---



