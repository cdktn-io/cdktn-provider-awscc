# `dataAwsccRefactorspacesRoute` Submodule <a name="`dataAwsccRefactorspacesRoute` Submodule" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRefactorspacesRoute <a name="DataAwsccRefactorspacesRoute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/refactorspaces_route awscc_refactorspaces_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/refactorspaces_route#id DataAwsccRefactorspacesRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRefactorspacesRoute resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRefactorspacesRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRefactorspacesRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRefactorspacesRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/refactorspaces_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRefactorspacesRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.defaultRoute">default_route</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference">DataAwsccRefactorspacesRouteDefaultRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.pathResourceToId">path_resource_to_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.routeIdentifier">route_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.routeType">route_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.serviceIdentifier">service_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList">DataAwsccRefactorspacesRouteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.uriPathRoute">uri_path_route</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference">DataAwsccRefactorspacesRouteUriPathRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_route`<sup>Required</sup> <a name="default_route" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.defaultRoute"></a>

```python
default_route: DataAwsccRefactorspacesRouteDefaultRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference">DataAwsccRefactorspacesRouteDefaultRouteOutputReference</a>

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `path_resource_to_id`<sup>Required</sup> <a name="path_resource_to_id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.pathResourceToId"></a>

```python
path_resource_to_id: str
```

- *Type:* str

---

##### `route_identifier`<sup>Required</sup> <a name="route_identifier" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.routeIdentifier"></a>

```python
route_identifier: str
```

- *Type:* str

---

##### `route_type`<sup>Required</sup> <a name="route_type" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.routeType"></a>

```python
route_type: str
```

- *Type:* str

---

##### `service_identifier`<sup>Required</sup> <a name="service_identifier" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.serviceIdentifier"></a>

```python
service_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.tags"></a>

```python
tags: DataAwsccRefactorspacesRouteTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList">DataAwsccRefactorspacesRouteTagsList</a>

---

##### `uri_path_route`<sup>Required</sup> <a name="uri_path_route" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.uriPathRoute"></a>

```python
uri_path_route: DataAwsccRefactorspacesRouteUriPathRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference">DataAwsccRefactorspacesRouteUriPathRouteOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRefactorspacesRouteConfig <a name="DataAwsccRefactorspacesRouteConfig" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/refactorspaces_route#id DataAwsccRefactorspacesRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRefactorspacesRouteDefaultRoute <a name="DataAwsccRefactorspacesRouteDefaultRoute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRoute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRoute()
```


### DataAwsccRefactorspacesRouteTags <a name="DataAwsccRefactorspacesRouteTags" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTags()
```


### DataAwsccRefactorspacesRouteUriPathRoute <a name="DataAwsccRefactorspacesRouteUriPathRoute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRoute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRoute()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRefactorspacesRouteDefaultRouteOutputReference <a name="DataAwsccRefactorspacesRouteDefaultRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.activationState">activation_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRoute">DataAwsccRefactorspacesRouteDefaultRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activation_state`<sup>Required</sup> <a name="activation_state" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.activationState"></a>

```python
activation_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRouteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRefactorspacesRouteDefaultRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteDefaultRoute">DataAwsccRefactorspacesRouteDefaultRoute</a>

---


### DataAwsccRefactorspacesRouteTagsList <a name="DataAwsccRefactorspacesRouteTagsList" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRefactorspacesRouteTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRefactorspacesRouteTagsOutputReference <a name="DataAwsccRefactorspacesRouteTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTags">DataAwsccRefactorspacesRouteTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRefactorspacesRouteTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteTags">DataAwsccRefactorspacesRouteTags</a>

---


### DataAwsccRefactorspacesRouteUriPathRouteOutputReference <a name="DataAwsccRefactorspacesRouteUriPathRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_refactorspaces_route

dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.activationState">activation_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath">append_source_path</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths">include_child_paths</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.sourcePath">source_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRoute">DataAwsccRefactorspacesRouteUriPathRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activation_state`<sup>Required</sup> <a name="activation_state" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.activationState"></a>

```python
activation_state: str
```

- *Type:* str

---

##### `append_source_path`<sup>Required</sup> <a name="append_source_path" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath"></a>

```python
append_source_path: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `include_child_paths`<sup>Required</sup> <a name="include_child_paths" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths"></a>

```python
include_child_paths: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_path`<sup>Required</sup> <a name="source_path" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.sourcePath"></a>

```python
source_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRouteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRefactorspacesRouteUriPathRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRefactorspacesRoute.DataAwsccRefactorspacesRouteUriPathRoute">DataAwsccRefactorspacesRouteUriPathRoute</a>

---



