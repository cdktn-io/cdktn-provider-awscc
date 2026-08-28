# `dataAwsccResourceexplorer2DefaultViewAssociation` Submodule <a name="`dataAwsccResourceexplorer2DefaultViewAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccResourceexplorer2DefaultViewAssociation <a name="DataAwsccResourceexplorer2DefaultViewAssociation" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/resourceexplorer2_default_view_association awscc_resourceexplorer2_default_view_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resourceexplorer2_default_view_association

dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/resourceexplorer2_default_view_association#id DataAwsccResourceexplorer2DefaultViewAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccResourceexplorer2DefaultViewAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_resourceexplorer2_default_view_association

dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_resourceexplorer2_default_view_association

dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_resourceexplorer2_default_view_association

dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_resourceexplorer2_default_view_association

dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccResourceexplorer2DefaultViewAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccResourceexplorer2DefaultViewAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccResourceexplorer2DefaultViewAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/resourceexplorer2_default_view_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccResourceexplorer2DefaultViewAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.associatedAwsPrincipal">associated_aws_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.viewArn">view_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `associated_aws_principal`<sup>Required</sup> <a name="associated_aws_principal" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.associatedAwsPrincipal"></a>

```python
associated_aws_principal: str
```

- *Type:* str

---

##### `view_arn`<sup>Required</sup> <a name="view_arn" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.viewArn"></a>

```python
view_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccResourceexplorer2DefaultViewAssociationConfig <a name="DataAwsccResourceexplorer2DefaultViewAssociationConfig" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_resourceexplorer2_default_view_association

dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResourceexplorer2DefaultViewAssociation.DataAwsccResourceexplorer2DefaultViewAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/resourceexplorer2_default_view_association#id DataAwsccResourceexplorer2DefaultViewAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



