# `dataAwsccApiportalPortal` Submodule <a name="`dataAwsccApiportalPortal` Submodule" id="@cdktn/provider-awscc.dataAwsccApiportalPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApiportalPortal <a name="DataAwsccApiportalPortal" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal awscc_apiportal_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortal(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal#id DataAwsccApiportalPortal#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApiportalPortal resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortal.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApiportalPortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApiportalPortal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApiportalPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApiportalPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference">DataAwsccApiportalPortalAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.endpointConfiguration">endpoint_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference">DataAwsccApiportalPortalEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.includedProductArns">included_product_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.logoUri">logo_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalArn">portal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalContent">portal_content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference">DataAwsccApiportalPortalPortalContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalId">portal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishDescription">publish_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishedAt">published_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishStatus">publish_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.rumAppMonitorName">rum_app_monitor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.statusException">status_exception</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference">DataAwsccApiportalPortalStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList">DataAwsccApiportalPortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.authorization"></a>

```python
authorization: DataAwsccApiportalPortalAuthorizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference">DataAwsccApiportalPortalAuthorizationOutputReference</a>

---

##### `endpoint_configuration`<sup>Required</sup> <a name="endpoint_configuration" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.endpointConfiguration"></a>

```python
endpoint_configuration: DataAwsccApiportalPortalEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference">DataAwsccApiportalPortalEndpointConfigurationOutputReference</a>

---

##### `included_product_arns`<sup>Required</sup> <a name="included_product_arns" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.includedProductArns"></a>

```python
included_product_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logo_uri`<sup>Required</sup> <a name="logo_uri" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.logoUri"></a>

```python
logo_uri: str
```

- *Type:* str

---

##### `portal_arn`<sup>Required</sup> <a name="portal_arn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalArn"></a>

```python
portal_arn: str
```

- *Type:* str

---

##### `portal_content`<sup>Required</sup> <a name="portal_content" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalContent"></a>

```python
portal_content: DataAwsccApiportalPortalPortalContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference">DataAwsccApiportalPortalPortalContentOutputReference</a>

---

##### `portal_id`<sup>Required</sup> <a name="portal_id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.portalId"></a>

```python
portal_id: str
```

- *Type:* str

---

##### `publish_description`<sup>Required</sup> <a name="publish_description" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishDescription"></a>

```python
publish_description: str
```

- *Type:* str

---

##### `published_at`<sup>Required</sup> <a name="published_at" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishedAt"></a>

```python
published_at: str
```

- *Type:* str

---

##### `publish_status`<sup>Required</sup> <a name="publish_status" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.publishStatus"></a>

```python
publish_status: str
```

- *Type:* str

---

##### `rum_app_monitor_name`<sup>Required</sup> <a name="rum_app_monitor_name" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.rumAppMonitorName"></a>

```python
rum_app_monitor_name: str
```

- *Type:* str

---

##### `status_exception`<sup>Required</sup> <a name="status_exception" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.statusException"></a>

```python
status_exception: DataAwsccApiportalPortalStatusExceptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference">DataAwsccApiportalPortalStatusExceptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.tags"></a>

```python
tags: DataAwsccApiportalPortalTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList">DataAwsccApiportalPortalTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApiportalPortalAuthorization <a name="DataAwsccApiportalPortalAuthorization" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorization.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorization()
```


### DataAwsccApiportalPortalAuthorizationAuthorizationConfig <a name="DataAwsccApiportalPortalAuthorizationAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfig()
```


### DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig <a name="DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig()
```


### DataAwsccApiportalPortalConfig <a name="DataAwsccApiportalPortalConfig" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_portal#id DataAwsccApiportalPortal#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApiportalPortalEndpointConfiguration <a name="DataAwsccApiportalPortalEndpointConfiguration" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfiguration()
```


### DataAwsccApiportalPortalEndpointConfigurationAcmManaged <a name="DataAwsccApiportalPortalEndpointConfigurationAcmManaged" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManaged.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManaged()
```


### DataAwsccApiportalPortalPortalContent <a name="DataAwsccApiportalPortalPortalContent" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContent()
```


### DataAwsccApiportalPortalPortalContentTheme <a name="DataAwsccApiportalPortalPortalContentTheme" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentTheme.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentTheme()
```


### DataAwsccApiportalPortalPortalContentThemeCustomColors <a name="DataAwsccApiportalPortalPortalContentThemeCustomColors" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColors()
```


### DataAwsccApiportalPortalStatusException <a name="DataAwsccApiportalPortalStatusException" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusException.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusException()
```


### DataAwsccApiportalPortalTags <a name="DataAwsccApiportalPortalTags" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference <a name="DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId">app_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_client_id`<sup>Required</sup> <a name="app_client_id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId"></a>

```python
app_client_id: str
```

- *Type:* str

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---


### DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference <a name="DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig">cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none">none</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfig">DataAwsccApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cognito_config`<sup>Required</sup> <a name="cognito_config" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig"></a>

```python
cognito_config: DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">DataAwsccApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a>

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none"></a>

```python
none: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalAuthorizationAuthorizationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfig">DataAwsccApiportalPortalAuthorizationAuthorizationConfig</a>

---


### DataAwsccApiportalPortalAuthorizationOutputReference <a name="DataAwsccApiportalPortalAuthorizationOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.authorizationConfig">authorization_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference">DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl">fine_grained_access_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorization">DataAwsccApiportalPortalAuthorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_config`<sup>Required</sup> <a name="authorization_config" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.authorizationConfig"></a>

```python
authorization_config: DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference">DataAwsccApiportalPortalAuthorizationAuthorizationConfigOutputReference</a>

---

##### `fine_grained_access_control`<sup>Required</sup> <a name="fine_grained_access_control" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl"></a>

```python
fine_grained_access_control: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalAuthorization
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalAuthorization">DataAwsccApiportalPortalAuthorization</a>

---


### DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference <a name="DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManaged">DataAwsccApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalEndpointConfigurationAcmManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManaged">DataAwsccApiportalPortalEndpointConfigurationAcmManaged</a>

---


### DataAwsccApiportalPortalEndpointConfigurationOutputReference <a name="DataAwsccApiportalPortalEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.acmManaged">acm_managed</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference">DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.none">none</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName">portal_default_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId">portal_domain_hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfiguration">DataAwsccApiportalPortalEndpointConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acm_managed`<sup>Required</sup> <a name="acm_managed" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.acmManaged"></a>

```python
acm_managed: DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference">DataAwsccApiportalPortalEndpointConfigurationAcmManagedOutputReference</a>

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.none"></a>

```python
none: str
```

- *Type:* str

---

##### `portal_default_domain_name`<sup>Required</sup> <a name="portal_default_domain_name" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName"></a>

```python
portal_default_domain_name: str
```

- *Type:* str

---

##### `portal_domain_hosted_zone_id`<sup>Required</sup> <a name="portal_domain_hosted_zone_id" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId"></a>

```python
portal_domain_hosted_zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalEndpointConfiguration">DataAwsccApiportalPortalEndpointConfiguration</a>

---


### DataAwsccApiportalPortalPortalContentOutputReference <a name="DataAwsccApiportalPortalPortalContentOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference">DataAwsccApiportalPortalPortalContentThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContent">DataAwsccApiportalPortalPortalContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.theme"></a>

```python
theme: DataAwsccApiportalPortalPortalContentThemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference">DataAwsccApiportalPortalPortalContentThemeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalPortalContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContent">DataAwsccApiportalPortalPortalContent</a>

---


### DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference <a name="DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor">accent_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor">background_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor">error_validation_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor">header_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor">navigation_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor">text_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColors">DataAwsccApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accent_color`<sup>Required</sup> <a name="accent_color" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor"></a>

```python
accent_color: str
```

- *Type:* str

---

##### `background_color`<sup>Required</sup> <a name="background_color" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor"></a>

```python
background_color: str
```

- *Type:* str

---

##### `error_validation_color`<sup>Required</sup> <a name="error_validation_color" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor"></a>

```python
error_validation_color: str
```

- *Type:* str

---

##### `header_color`<sup>Required</sup> <a name="header_color" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor"></a>

```python
header_color: str
```

- *Type:* str

---

##### `navigation_color`<sup>Required</sup> <a name="navigation_color" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor"></a>

```python
navigation_color: str
```

- *Type:* str

---

##### `text_color`<sup>Required</sup> <a name="text_color" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor"></a>

```python
text_color: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalPortalContentThemeCustomColors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColors">DataAwsccApiportalPortalPortalContentThemeCustomColors</a>

---


### DataAwsccApiportalPortalPortalContentThemeOutputReference <a name="DataAwsccApiportalPortalPortalContentThemeOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.customColors">custom_colors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference">DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt">logo_uploaded_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentTheme">DataAwsccApiportalPortalPortalContentTheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_colors`<sup>Required</sup> <a name="custom_colors" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.customColors"></a>

```python
custom_colors: DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference">DataAwsccApiportalPortalPortalContentThemeCustomColorsOutputReference</a>

---

##### `logo_uploaded_at`<sup>Required</sup> <a name="logo_uploaded_at" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt"></a>

```python
logo_uploaded_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentThemeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalPortalContentTheme
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalPortalContentTheme">DataAwsccApiportalPortalPortalContentTheme</a>

---


### DataAwsccApiportalPortalStatusExceptionOutputReference <a name="DataAwsccApiportalPortalStatusExceptionOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.exception">exception</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusException">DataAwsccApiportalPortalStatusException</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exception`<sup>Required</sup> <a name="exception" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.exception"></a>

```python
exception: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusExceptionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalStatusException
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalStatusException">DataAwsccApiportalPortalStatusException</a>

---


### DataAwsccApiportalPortalTagsList <a name="DataAwsccApiportalPortalTagsList" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApiportalPortalTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApiportalPortalTagsOutputReference <a name="DataAwsccApiportalPortalTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apiportal_portal

dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTags">DataAwsccApiportalPortalTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApiportalPortalTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalPortal.DataAwsccApiportalPortalTags">DataAwsccApiportalPortalTags</a>

---



