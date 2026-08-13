# `dataAwsccVerifiedpermissionsPolicy` Submodule <a name="`dataAwsccVerifiedpermissionsPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVerifiedpermissionsPolicy <a name="DataAwsccVerifiedpermissionsPolicy" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/verifiedpermissions_policy awscc_verifiedpermissions_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/verifiedpermissions_policy#id DataAwsccVerifiedpermissionsPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccVerifiedpermissionsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccVerifiedpermissionsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/verifiedpermissions_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVerifiedpermissionsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyStoreId">policy_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.definition"></a>

```python
definition: DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `policy_store_id`<sup>Required</sup> <a name="policy_store_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyStoreId"></a>

```python
policy_store_id: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVerifiedpermissionsPolicyConfig <a name="DataAwsccVerifiedpermissionsPolicyConfig" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/verifiedpermissions_policy#id DataAwsccVerifiedpermissionsPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVerifiedpermissionsPolicyDefinition <a name="DataAwsccVerifiedpermissionsPolicyDefinition" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinition()
```


### DataAwsccVerifiedpermissionsPolicyDefinitionStatic <a name="DataAwsccVerifiedpermissionsPolicyDefinitionStatic" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStatic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStatic.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStatic()
```


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked()
```


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal()
```


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.static">static</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked">template_linked</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinition">DataAwsccVerifiedpermissionsPolicyDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `static`<sup>Required</sup> <a name="static" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.static"></a>

```python
static: DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference</a>

---

##### `template_linked`<sup>Required</sup> <a name="template_linked" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked"></a>

```python
template_linked: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinition">DataAwsccVerifiedpermissionsPolicyDefinition</a>

---


### DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement">statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStatic">DataAwsccVerifiedpermissionsPolicyDefinitionStatic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement"></a>

```python
statement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyDefinitionStatic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStatic">DataAwsccVerifiedpermissionsPolicyDefinitionStatic</a>

---


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId">policy_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_template_id`<sup>Required</sup> <a name="policy_template_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId"></a>

```python
policy_template_id: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal"></a>

```python
principal: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource"></a>

```python
resource: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked</a>

---


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>

---


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_verifiedpermissions_policy

dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>

---



