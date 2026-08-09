# `dataAwsccMediapackagePackagingGroup` Submodule <a name="`dataAwsccMediapackagePackagingGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediapackagePackagingGroup <a name="DataAwsccMediapackagePackagingGroup" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackage_packaging_group awscc_mediapackage_packaging_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackage_packaging_group#id DataAwsccMediapackagePackagingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediapackagePackagingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediapackagePackagingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediapackagePackagingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediapackagePackagingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackage_packaging_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediapackagePackagingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference">DataAwsccMediapackagePackagingGroupAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.egressAccessLogs">egress_access_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference">DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.packagingGroupId">packaging_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList">DataAwsccMediapackagePackagingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.authorization"></a>

```python
authorization: DataAwsccMediapackagePackagingGroupAuthorizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference">DataAwsccMediapackagePackagingGroupAuthorizationOutputReference</a>

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `egress_access_logs`<sup>Required</sup> <a name="egress_access_logs" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.egressAccessLogs"></a>

```python
egress_access_logs: DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference">DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference</a>

---

##### `packaging_group_id`<sup>Required</sup> <a name="packaging_group_id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.packagingGroupId"></a>

```python
packaging_group_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.tags"></a>

```python
tags: DataAwsccMediapackagePackagingGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList">DataAwsccMediapackagePackagingGroupTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediapackagePackagingGroupAuthorization <a name="DataAwsccMediapackagePackagingGroupAuthorization" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorization.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorization()
```


### DataAwsccMediapackagePackagingGroupConfig <a name="DataAwsccMediapackagePackagingGroupConfig" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediapackage_packaging_group#id DataAwsccMediapackagePackagingGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediapackagePackagingGroupEgressAccessLogs <a name="DataAwsccMediapackagePackagingGroupEgressAccessLogs" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogs()
```


### DataAwsccMediapackagePackagingGroupTags <a name="DataAwsccMediapackagePackagingGroupTags" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediapackagePackagingGroupAuthorizationOutputReference <a name="DataAwsccMediapackagePackagingGroupAuthorizationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret">cdn_identifier_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn">secrets_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorization">DataAwsccMediapackagePackagingGroupAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cdn_identifier_secret`<sup>Required</sup> <a name="cdn_identifier_secret" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret"></a>

```python
cdn_identifier_secret: str
```

- *Type:* str

---

##### `secrets_role_arn`<sup>Required</sup> <a name="secrets_role_arn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn"></a>

```python
secrets_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingGroupAuthorization
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupAuthorization">DataAwsccMediapackagePackagingGroupAuthorization</a>

---


### DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference <a name="DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogs">DataAwsccMediapackagePackagingGroupEgressAccessLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingGroupEgressAccessLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupEgressAccessLogs">DataAwsccMediapackagePackagingGroupEgressAccessLogs</a>

---


### DataAwsccMediapackagePackagingGroupTagsList <a name="DataAwsccMediapackagePackagingGroupTagsList" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediapackagePackagingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediapackagePackagingGroupTagsOutputReference <a name="DataAwsccMediapackagePackagingGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediapackage_packaging_group

dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTags">DataAwsccMediapackagePackagingGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediapackagePackagingGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediapackagePackagingGroup.DataAwsccMediapackagePackagingGroupTags">DataAwsccMediapackagePackagingGroupTags</a>

---



