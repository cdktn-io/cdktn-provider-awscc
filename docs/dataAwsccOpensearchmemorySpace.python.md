# `dataAwsccOpensearchmemorySpace` Submodule <a name="`dataAwsccOpensearchmemorySpace` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchmemorySpace <a name="DataAwsccOpensearchmemorySpace" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space awscc_opensearchmemory_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space#id DataAwsccOpensearchmemorySpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchmemorySpace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccOpensearchmemorySpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccOpensearchmemorySpace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccOpensearchmemorySpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchmemorySpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference">DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.eventExpiryDays">event_expiry_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.extractionModelId">extraction_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryExpiryDays">memory_expiry_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryStrategies">memory_strategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList">DataAwsccOpensearchmemorySpaceMemoryStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList">DataAwsccOpensearchmemorySpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.encryptionConfiguration"></a>

```python
encryption_configuration: DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference">DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference</a>

---

##### `event_expiry_days`<sup>Required</sup> <a name="event_expiry_days" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.eventExpiryDays"></a>

```python
event_expiry_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extraction_model_id`<sup>Required</sup> <a name="extraction_model_id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.extractionModelId"></a>

```python
extraction_model_id: str
```

- *Type:* str

---

##### `memory_expiry_days`<sup>Required</sup> <a name="memory_expiry_days" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryExpiryDays"></a>

```python
memory_expiry_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_strategies`<sup>Required</sup> <a name="memory_strategies" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.memoryStrategies"></a>

```python
memory_strategies: DataAwsccOpensearchmemorySpaceMemoryStrategiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList">DataAwsccOpensearchmemorySpaceMemoryStrategiesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tags"></a>

```python
tags: DataAwsccOpensearchmemorySpaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList">DataAwsccOpensearchmemorySpaceTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchmemorySpaceConfig <a name="DataAwsccOpensearchmemorySpaceConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/opensearchmemory_space#id DataAwsccOpensearchmemorySpace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchmemorySpaceEncryptionConfiguration <a name="DataAwsccOpensearchmemorySpaceEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration()
```


### DataAwsccOpensearchmemorySpaceMemoryStrategies <a name="DataAwsccOpensearchmemorySpaceMemoryStrategies" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies()
```


### DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration()
```


### DataAwsccOpensearchmemorySpaceTags <a name="DataAwsccOpensearchmemorySpaceTags" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference <a name="DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration">DataAwsccOpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchmemorySpaceEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceEncryptionConfiguration">DataAwsccOpensearchmemorySpaceEncryptionConfiguration</a>

---


### DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled">consolidation_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages">extract_every_n_messages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens">extract_every_n_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt">extraction_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN">extraction_seed_recent_n</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK">extraction_seed_top_k</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds">idle_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consolidation_enabled`<sup>Required</sup> <a name="consolidation_enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled"></a>

```python
consolidation_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `extract_every_n_messages`<sup>Required</sup> <a name="extract_every_n_messages" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages"></a>

```python
extract_every_n_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extract_every_n_tokens`<sup>Required</sup> <a name="extract_every_n_tokens" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens"></a>

```python
extract_every_n_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extraction_prompt`<sup>Required</sup> <a name="extraction_prompt" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt"></a>

```python
extraction_prompt: str
```

- *Type:* str

---

##### `extraction_seed_recent_n`<sup>Required</sup> <a name="extraction_seed_recent_n" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN"></a>

```python
extraction_seed_recent_n: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extraction_seed_top_k`<sup>Required</sup> <a name="extraction_seed_top_k" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK"></a>

```python
extraction_seed_top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout_seconds`<sup>Required</sup> <a name="idle_timeout_seconds" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds"></a>

```python
idle_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---


### DataAwsccOpensearchmemorySpaceMemoryStrategiesList <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesList" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference <a name="DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies">DataAwsccOpensearchmemorySpaceMemoryStrategies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration"></a>

```python
configuration: DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">DataAwsccOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchmemorySpaceMemoryStrategies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceMemoryStrategies">DataAwsccOpensearchmemorySpaceMemoryStrategies</a>

---


### DataAwsccOpensearchmemorySpaceTagsList <a name="DataAwsccOpensearchmemorySpaceTagsList" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOpensearchmemorySpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOpensearchmemorySpaceTagsOutputReference <a name="DataAwsccOpensearchmemorySpaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearchmemory_space

dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags">DataAwsccOpensearchmemorySpaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchmemorySpaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchmemorySpace.DataAwsccOpensearchmemorySpaceTags">DataAwsccOpensearchmemorySpaceTags</a>

---



