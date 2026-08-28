# `dataAwsccCodeartifactPackageGroup` Submodule <a name="`dataAwsccCodeartifactPackageGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodeartifactPackageGroup <a name="DataAwsccCodeartifactPackageGroup" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeartifact_package_group awscc_codeartifact_package_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeartifact_package_group#id DataAwsccCodeartifactPackageGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCodeartifactPackageGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCodeartifactPackageGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCodeartifactPackageGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCodeartifactPackageGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeartifact_package_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodeartifactPackageGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.contactInfo">contact_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.domainOwner">domain_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.originConfiguration">origin_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList">DataAwsccCodeartifactPackageGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `contact_info`<sup>Required</sup> <a name="contact_info" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.contactInfo"></a>

```python
contact_info: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_owner`<sup>Required</sup> <a name="domain_owner" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

---

##### `origin_configuration`<sup>Required</sup> <a name="origin_configuration" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.originConfiguration"></a>

```python
origin_configuration: DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference</a>

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.tags"></a>

```python
tags: DataAwsccCodeartifactPackageGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList">DataAwsccCodeartifactPackageGroupTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodeartifactPackageGroupConfig <a name="DataAwsccCodeartifactPackageGroupConfig" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codeartifact_package_group#id DataAwsccCodeartifactPackageGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodeartifactPackageGroupOriginConfiguration <a name="DataAwsccCodeartifactPackageGroupOriginConfiguration" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfiguration()
```


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions()
```


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream()
```


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream()
```


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish()
```


### DataAwsccCodeartifactPackageGroupTags <a name="DataAwsccCodeartifactPackageGroupTags" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfiguration">DataAwsccCodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions"></a>

```python
restrictions: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodeartifactPackageGroupOriginConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfiguration">DataAwsccCodeartifactPackageGroupOriginConfiguration</a>

---


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream">external_upstream</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream">internal_upstream</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish">publish</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_upstream`<sup>Required</sup> <a name="external_upstream" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream"></a>

```python
external_upstream: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a>

---

##### `internal_upstream`<sup>Required</sup> <a name="internal_upstream" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream"></a>

```python
internal_upstream: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a>

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish"></a>

```python
publish: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictions</a>

---


### DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference <a name="DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories">repositories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories"></a>

```python
repositories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish">DataAwsccCodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---


### DataAwsccCodeartifactPackageGroupTagsList <a name="DataAwsccCodeartifactPackageGroupTagsList" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCodeartifactPackageGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCodeartifactPackageGroupTagsOutputReference <a name="DataAwsccCodeartifactPackageGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_codeartifact_package_group

dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTags">DataAwsccCodeartifactPackageGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCodeartifactPackageGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodeartifactPackageGroup.DataAwsccCodeartifactPackageGroupTags">DataAwsccCodeartifactPackageGroupTags</a>

---



